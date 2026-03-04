import { renderHook, act } from "@testing-library/react";
import useFormFields from "./useFormFields";

describe("useFormFields", () => {
  it("updates field and clears all", () => {
    const { result } = renderHook(() => useFormFields({ name: "", age: "" }));

    act(() => {
      result.current.onChange({ target: { name: "name", value: "John" } } as any);
    });
    expect(result.current.values.name).toBe("John");

    act(() => result.current.clearAll());
    expect(result.current.values).toEqual({ name: "", age: "" });
  });
});
