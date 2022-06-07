import React, { useReducer } from "react";

// 상태의 업데이트 로직이
// 컴포넌트 외부에 존재
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      //throw new Error("Unhandled Error");
      return state;
  }
};

export function Counter() {
  //const [number, setNumber] = useState(0);
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    //setNumber((prev) => prev + 1);
    dispatch({
      type: "INCREMENT",
    });
  };
  const onDecrease = () => {
    //setNumber((prev) => prev - 1);
    dispatch({
      type: "DECREMENT",
    });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
