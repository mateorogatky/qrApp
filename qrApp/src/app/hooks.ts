import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";
//Hook que permite actualizar de forma "automatica" el tipo de dato de los distintos rootState
//HOOK QUE SE USAN EN REMPLAZO DE useDispatch y useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
