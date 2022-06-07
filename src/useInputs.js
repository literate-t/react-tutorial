import { useCallback, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "RESET_INPUT":
      return action.initialForm;
    default:
      throw new Error("Unhandled action");
  }
};

export const useInputs = (initialForm) => {
  const [form, dispatch] = useReducer(reducer, initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);
  const reset = useCallback(
    () =>
      dispatch({
        type: "RESET_INPUT",
        initialForm,
      }),
    [initialForm]
  );
  // const [form, setForm] = useState(initialForm);
  // const onChange = useCallback((e) => {
  //   const { name, value } = e.target;
  //   setForm((form) => ({ ...form, [name]: value }));
  // }, []);

  // const reset = useCallback(() => setForm(initialForm), [initialForm]); // 파라미터로 쓰니까 deps에 넣는다?..

  return [form, onChange, reset];
};
