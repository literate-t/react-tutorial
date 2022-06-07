import { UserList } from "./UserList";
import { CreateUser } from "./CreateUser";
import { useReducer, useMemo, createContext } from "react";

const countActiveUsers = (users) => {
  console.log("활성 사용자 수 세는 중");
  return users.filter((user) => user.active).length;
};

const initialState = {
  users: [
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
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error("Unhandled Action");
  }
};
export const UserDispatch = createContext(null);
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const nextId = useRef(4);
  const { users } = state;

  // const [form, onChange, reset] = useInputs({
  //   username: "",
  //   email: "",
  // });
  // const { username, email } = form;
  // const onCreate = useCallback(() => {
  //   if (username && email) {
  //     dispatch({
  //       type: "CREATE_USER",
  //       user: {
  //         id: nextId.current,
  //         username,
  //         email,
  //       },
  //     });
  //     nextId.current++;
  //   }
  //   reset();
  // }, [username, email, reset]); // reset은 eslint 규칙으로 넣었다고 하는데 상관 없다고.

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
