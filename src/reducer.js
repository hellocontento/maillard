const toastReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'ADD_TOAST':
      return [...state, payload];
    case 'REMOVE_TOAST':
      return state.filter(toast => payload.id !== toast.id);
    default:
      return [...state];
  }
}

export default toastReducer;