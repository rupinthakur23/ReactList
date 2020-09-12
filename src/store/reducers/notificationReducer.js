const initialState = {
    bag:"diesel"
}

const notificationReducer = (state=initialState,action) =>{
    if (action.type === "INC_BAG") {
        return {
          ...state,
        
        };
      }

    return state
}



export default notificationReducer