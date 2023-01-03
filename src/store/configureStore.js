import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";

//store : 스테이트랑 리듀서를 포함하는 개념
const configureStore = () => {
  //   const middlewares = [];

  //   const enhancer =
  //     process.env.NODE_ENV === "production"
  //       ? compose(applyMiddleware([...middlewares]))
  //       : composeWithDevTools(applyMiddleware([...middlewares]));
  const store = createStore(reducer);
  store.dispatch({
    type: "CHANGE_NICKNAME",
    data: "boggiho",
  });
  return store;
};

// const wrapper = createWrapper(configureStore, {
//   debug: process.env.NODE_ENV === "development",
// });

export default configureStore;
