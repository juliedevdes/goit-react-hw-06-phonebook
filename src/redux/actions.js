export const handleInputNumber = (value) => ({
  type: "HANDLE_INPUT_NUMBER",
  payload: value,
});

export const handleInputName = (value) => ({
  type: "HANDLE_INPUT_NAME",
  payload: value,
});

export const submit = (contact) => ({
  type: "SUBMIT",
  payload: contact,
});
