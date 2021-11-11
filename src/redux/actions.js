export const handleFilter = (value) => ({
  type: "HANDLE_FILTER",
  payload: value,
});

export const deleteContact = (id) => ({
  type: "DELETE_CONTACT",
  payload: id,
});

export const submit = (contact) => ({
  type: "SUBMIT",
  payload: contact,
});
