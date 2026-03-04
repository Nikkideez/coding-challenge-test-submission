import React from "react";

export default function useFormFields<T extends Record<string, string>>(initialValues: T) {
  const [values, setValues] = React.useState<T>(initialValues);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clearAll = () => setValues(initialValues);

  return { values, onChange, clearAll };
}
