const initialState = {
  counter: 10,
  isAuth: true,
};

const UserReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "DEC_COUNTER") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  return state;
};

export default UserReducer;

/// we dispatch action => reducer update store based on action type .
