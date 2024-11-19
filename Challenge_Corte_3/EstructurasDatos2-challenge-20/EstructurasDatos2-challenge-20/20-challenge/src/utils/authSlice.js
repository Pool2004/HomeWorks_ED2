import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; // Add Firestore imports

const db = getFirestore(); // Initialize Firestore

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { uid, email: userEmail } = userCredential.user;
    
    // Fetch the username from Firestore
    const userDoc = await getDoc(doc(db, "users", uid));
    if (!userDoc.exists()) {
      throw new Error("User not found in the database");
    }
    const username = userDoc.data().username;

    return { uid, email: userEmail, displayName: username };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const loginWithGoogle = createAsyncThunk("auth/loginWithGoogle", async (_, { rejectWithValue }) => {
  const provider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const { uid, email, displayName } = userCredential.user;

    // Save user data in Firestore
    await setDoc(doc(db, "users", uid), {
      email,
      username: displayName
    }, { merge: true });

    return { uid, email, displayName };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, username }, { rejectWithValue }) => {
    try {
      if (!email || !password) {
        return rejectWithValue("El correo electrónico y la contraseña son obligatorios.");
      }

      if (password.length < 6) {
        return rejectWithValue("La contraseña debe tener al menos 6 caracteres.");
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { uid, email: userEmail } = userCredential.user;

      // Save user data in Firestore
      await setDoc(doc(db, "users", uid), {
        email: userEmail,
        username: username
      });

      return { uid, email: userEmail, displayName: username };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, status: "idle", error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.status = "succeeded";
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("Login fulfilled:", action.payload); // Para debugging
        state.user = action.payload;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.user = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
