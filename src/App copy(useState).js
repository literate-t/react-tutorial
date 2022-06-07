import { UserList } from "./UserList";
import { CreateUser } from "./CreateUser";
import { useState, useRef, useMemo, useCallback } from "react";

function countActiveUsers(users) {
  console.log("활성 사용자 수 세는 중");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs] // depth에 넣은 인자가 바뀔 떄만 함수를 새로 만든다
  );
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "kim",
      email: "kim@mail.com",
      active: true,
    },
    {
      id: 2,
      username: "lee",
      email: "lee@mail.com",
      active: true,
    },
    {
      id: 3,
      username: "park",
      email: "park@mail.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);

  // useCallback은 함수 재사용을 위해 사용
  const onCreate = useCallback(() => {
    // setUsers([
    //   ...users,
    //   { id: nextId.current, username, email, active: false },
    // ]);
    setUsers((users) => [
      ...users,
      { id: nextId.current, username, email, active: false },
    ]);
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [/*users,*/ username, email]);

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);
  const count = useMemo(() => countActiveUsers(users), [users]); // 연산된 값을 재사용하기 위함
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
