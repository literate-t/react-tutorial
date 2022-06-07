import React, { useContext } from "react";
import { UserDispatch } from "./App";
const User = React.memo(({ user }) => {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);
  return (
    <div>
      <b
        style={{ color: active ? "green" : "black", cursor: "pointer" }}
        onClick={() =>
          dispatch({
            type: "TOGGLE_USER",
            id,
          })
        }
      >
        {username}
      </b>{" "}
      <span>({email})</span>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_USER",
            id,
          })
        }
      >
        삭제
      </button>
    </div>
  );
});

export const UserList = React.memo(
  ({ users }) => {
    return (
      <div>
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    );
  },
  (prevProps, nextProps) => nextProps.users === prevProps.users // users가 바뀌지 않았다면 렌더링 안 함
  // propsAreEqual 함수를 사용할 때는 정말 users에 최신 값이 제대로 들어오는지 로직을 확인해야 함
  // 여기에서는 함수형 업데이트를 사용하기 때문에 users가 언제나 최신 값을 가지고 있다는 걸 보장할 수 있음
);
