import React from "react";
import { Provider } from "react-redux";


import Navigation from "./src/navigation/navigation";
import { store } from "./src/app/store";

export default function App(): JSX.Element {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
}
