const initialState = {
  items: [],
};

const notificationReducer = (state = initialState, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      items: state.items.concat(action.value),
    };
  }

  return state;
};

export default notificationReducer;
