import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, incrementBy } from "../utils/counterActions";

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleInput = (e) => setValue(Number(e.target.value));

  return (
    <div className="counter-container">
      <h1 className="counter-value">{count}</h1>
      <div className="counter-actions">
        <button className="counter-btn decrement" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button className="counter-btn increment" onClick={() => dispatch(incrementBy(value))}>
          Increment by {value}
        </button>
      </div>
      <input
        type="number"
        className="counter-input"
        value={value}
        placeholder="Enter value"
        onChange={handleInput}
      />
    </div>
  );
};

export default CounterComponent;
