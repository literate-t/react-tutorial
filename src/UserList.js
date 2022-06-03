import { useEffect } from "react";

const User = ({ user, onRemove, onToggle }) => {
  const { username, email, id, active } = user;
  // useEffect(() => {
  //   // DOM 접근도 가능
  //   // setInterval
  //   console.log("컴포넌트 생성");
  //   return () => {
  //     // clearInterval
  //     console.log("사라짐");
  //   };
  // }, []);
  // useEffect(() => {
  //   console.log("유저 값이 설정됨");
  //   console.log(user);
  //   return () => {
  //     console.log("유저 값이 바뀌기 전");
  //     console.log(user);
  //   };
  // }, [user]);
  return (
    <div>
      <b
        style={{ color: active ? "green" : "black", cursor: "pointer" }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>{" "}
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
};

export const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};
