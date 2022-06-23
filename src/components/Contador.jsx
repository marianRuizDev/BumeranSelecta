import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/count";
import { postLoginRequest } from "../redux/login";

function Contador() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.contador.value);
  const user = useSelector((state) => state.login);

  const handleDecrement = () => {
    dispatch(decrement());
    dispatch(postLoginRequest());
  };

  const handleIncrement = () => {
    dispatch(increment());
    console.log("USER", user);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Contador;
