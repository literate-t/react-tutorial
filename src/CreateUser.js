import React, { useRef, useContext, useCallback } from "react";
import { useInputs } from "./useInputs";
import { UserDispatch } from "./App";
export const CreateUser = React.memo(() => {
  const dispatch = useContext(UserDispatch);
  const [form, onChange, reset] = useInputs({
    username: "",
    email: "",
  });

  const nextId = useRef(4);
  const { username, email } = form;
  const onCreate = useCallback(() => {
    if (username && email) {
      dispatch({
        type: "CREATE_USER",
        user: {
          id: nextId.current,
          username,
          email,
        },
      });
      nextId.current++;
    }
    reset();
  }, [username, email, reset, dispatch]);
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
});
