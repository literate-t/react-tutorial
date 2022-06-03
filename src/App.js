import { UserList } from "./UserList";
import { CreateUser } from "./CreateUser";
import { useState, useRef } from "react";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
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

  const onCreate = () => {
    setUsers([
      ...users,
      { id: nextId.current, username, email, active: false },
    ]);
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
