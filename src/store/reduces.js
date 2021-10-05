import { combineReducers } from "redux";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    default:
      return state;
  }
};

const contactList = (state = [], action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return action.payload;
    default:
      return state;
  }
};

const conversation = (state = {}, action) => {
  switch (action.type) {
    case "ADD_CONVERSATION":
      return action.payload;
    default:
      return state;
  }
};

let allReducer = combineReducers({
  user: userReducer,
  conversation: conversation,
  contactList: contactList,
});

export default allReducer;
