const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  //switch case, because all reducers get all actions and so we have to filter which action we want
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state, //whole state because we don´t want to change the whole state
        currentUser: action.payload, //just change this
      };
    default:
      return state;
  }
};

export default userReducer;
