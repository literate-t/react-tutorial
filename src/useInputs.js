import { useState, useCallback } from "react";

export const useInputs = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm]); // 파라미터로 쓰니까 deps에 넣는다?..

  return [form, onChange, reset];
};
