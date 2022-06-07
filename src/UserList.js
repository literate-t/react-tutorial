import React from "react";
// React.memo 렌더링 된 결과물을 재사용
const User = React.memo(({ user, onRemove, onToggle }) => {
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
});

export const UserList = React.memo(
  ({ users, onRemove, onToggle }) => {
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
  },
  (prevProps, nextProps) => nextProps.users === prevProps.users // users가 바뀌지 않았다면 렌더링 안 함
  // propsAreEqual 함수를 사용할 때는 정말 users에 최신 값이 제대로 들어오는지 로직을 확인해야 함
  // 여기에서는 함수형 업데이트를 사용하기 때문에 users가 언제나 최신 값을 가지고 있다는 걸 보장할 수 있음
);
