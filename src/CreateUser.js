import React from "react";
// React.memo 렌더링 된 결과물을 재사용
// 아무 컴포넌트에 다 사용하지 말고
// 최적화를 할 수 있을 때
export const CreateUser = React.memo(
  ({ username, email, onChange, onCreate }) => {
    console.log("CreatUser");
    return (
      <div>
        <input
          name="username"
          placeholder="계정명"
          onChange={onChange}
          value={username}
        />
        <input
          name="email"
          placeholder="email"
          onChange={onChange}
          value={email}
        />
        <button onClick={onCreate}>등록</button>
      </div>
    );
  }
);
