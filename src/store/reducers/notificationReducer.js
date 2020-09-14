const initialState = {
  items: [],
  counter:5
};

const notificationReducer = (state = initialState, action) => {

   switch(action.type){
     case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.value],
      };
      case "DELETE_ITEM":
        return {
          ...state,
          counter:state.counter-1,
        };

   }


  return state;
};

export default notificationReducer;
