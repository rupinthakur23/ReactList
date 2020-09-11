const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
  isAuth: false,
  items: [],
};

const userReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 10,
    };
  }
  if (action.type === "IS_AUTH") {
    return {
      ...state,
      isAuth: true,
    };
  }
  return state;
};

const store = createStore(userReducer);

store.dispatch({ type: "INC_COU"})