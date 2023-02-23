import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feactures/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; //TypeScript tiene un integrado una forma para que retorne el tipo de dato que maneja la funcion
