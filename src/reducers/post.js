export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "",
      },
      content: "",
    },
  ],
  postAdded: false,
};

const ADD_POST = "ADD_POST";

export const addPost = {
  type: ADD_POST,
};

//서버에서 post 할 떄 이 값을 전달해주면 됨
const dummyPost = {
  id: 2,
  content: "맛있습니다",
  User: {
    id: 1,
    nickname: "조기범",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
      };

    default:
      return state;
  }
};

export default reducer;
