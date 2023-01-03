import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [
      {
        id: 1,
        User: {
          id: 1,
          nickname: "조기범",
        },
        content: "맛있습니다",
      },
    ],
    postAdded: false,
  },
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = (data) => {
  return {
    type: "LOG_OUT",
  };
};
const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data,
  };
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 2,
  content: "",
  User: {
    id: 1,
    nickname: "",
  },
};

// (이전상태 , 액션) => 다음상태
const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;

// case "ADD_POST":
//       return {
//         ...state,
//         post: {
//           ...state,
//           mainPosts: [dummyPost, ...state.mainPosts],
//           postAdded : true,
//         },
//       };
