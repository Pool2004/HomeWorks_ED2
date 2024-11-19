import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import '../assets/css/LoginWithGoogle.css'; // Import CSS

export const loginWithGoogle = createAsyncThunk("auth/loginWithGoogle", async (_, { rejectWithValue }) => {
  const provider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential.user;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
