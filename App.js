import React from "react";
import { Provider } from "react-redux";
import MainNavigation from "./app/Navigation/MainNavigation";
import { store } from "./app/Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
