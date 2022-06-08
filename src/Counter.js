import React, { Component, useReducer } from "react";

export default class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.handleIncreae = this.handleIncreae.bind(this);
  //   // this.handleDecrease = this.handleDecrease.bind(this);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // babel에서 지원하는 클래스 프로퍼티 문법
  state = {
    count: 0,
  };

  // babel에서 지원하는 클래스 프로퍼티 문법
  handleIncreae = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // babel에서 지원하는 클래스 프로퍼티 문법
  handleDecrease = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncreae}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

// // 상태의 업데이트 로직이
// // 컴포넌트 외부에 존재
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       //throw new Error("Unhandled Error");
//       return state;
//   }
// };

// export function Counter() {
//   //const [number, setNumber] = useState(0);
//   const [number, dispatch] = useReducer(reducer, 0);

//   const onIncrease = () => {
//     //setNumber((prev) => prev + 1);
//     dispatch({
//       type: "INCREMENT",
//     });
//   };
//   const onDecrease = () => {
//     //setNumber((prev) => prev - 1);
//     dispatch({
//       type: "DECREMENT",
//     });
//   };
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }
