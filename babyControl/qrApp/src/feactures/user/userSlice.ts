import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { EditUser, ResponseLogin } from "../../utils/Interface";

const initialState: ResponseLogin = {
  usuario: {
    id_usuario: "",
    nombre: "",
    apellido: "",
    telefono: "",
    dni: 0,
    domicilio: "",
    fecha_nacimiento: "",
    edad: 0,
    avatar: "",
    fecha_alta: "",
    email: "",
    contrasena: "",
    estado: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addLogin: (state, action: PayloadAction<any>) => {
      return (state = action.payload);
    },
    addUser: (state, action: PayloadAction<any>) => {
      return (state.usuario = action.payload);
    },
    addAvatar: (state, action: PayloadAction<any>) => {
      return (state.usuario.avatar = action.payload);
    },
    editUser: (state, action: PayloadAction<any>) => {
      state.usuario.nombre_cliente = action.payload.nombre;
      state.usuario.apellido_cliente = action.payload.apellido;
      state.usuario.cuit = action.payload.cuit;
      state.usuario.dni = action.payload.dni;
    },
  },
});

export const { addLogin, addUser, addAvatar, editUser} = userSlice.actions;
export const getUsuario = (state: RootState) => state.user.usuario;
export const getUser = (state: RootState)=>state.user
export default userSlice.reducer;
