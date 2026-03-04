import reducer, { addAddress, removeAddress } from "./addressBookSlice";

const mockAddress = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  street: "Main St",
  houseNumber: "10",
  postcode: "1234",
  city: "Sydney",
};

describe("addressBookSlice", () => {
  it("adds an address", () => {
    const state = reducer(undefined, addAddress(mockAddress));
    expect(state.addresses).toHaveLength(1);
  });

  it("prevents duplicates", () => {
    let state = reducer(undefined, addAddress(mockAddress));
    state = reducer(state, addAddress(mockAddress));
    expect(state.addresses).toHaveLength(1);
  });

  it("removes an address by id", () => {
    let state = reducer(undefined, addAddress(mockAddress));
    state = reducer(state, removeAddress("1"));
    expect(state.addresses).toHaveLength(0);
  });
});
