import { yupToFormErrors } from "formik";
import * as yup from "yup";

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email("Por favor ingrese un email valido")
    .required("Ingrese un email"),
  contrasena: yup
    .string()
    .min(8, ({ min }) => `Ingrese una contraseña mayor a  ${min} caracteres`)
    .required("La contraseña es requerida"),
});

export const registerValidation = yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio"),
  apellido: yup.string().required("El apellido es obligatorio"),
  email: yup
    .string()
    .email("Por favor ingrese un email valido")
    .required("Ingrese un email"),
  contrasena: yup
    .string()
    .min(8, ({ min }) => `Ingrese una contraseña mayor a  ${min} caracteres`)
    .required("La contraseña es requerida"),
});

export const emailValidation = yup.object().shape({
  email: yup
    .string()
    .email("Por favor ingrese un email valido")
    .required("Ingrese un email"),
});

export const editFormProfileValidation = yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio"),
  apellido: yup.string().required("El apellido es obligatorio"),
  email: yup
    .string()
    .email("Por favor ingrese un email valido")
    .required("Ingrese un email"),
  dni: yup
    .string()
    .test("len", "Debe poseer 8 digitos", (value) => value.length === 8)
    .required("El dni es obligatorio")
    .typeError("Deben ser numeros"),

  cuit: yup
    .string()
    .test("len", "Debe poseer 11 digitos", (value) => value.length === 11)
    .required("El cuit es obligatorio")
    .typeError("Deben ser numeros"),
});
export const editFormPassword = yup.object().shape({
  passwordactaul: yup
    .string()
    .min(8, ({ min }) => `Ingrese una contraseña mayor a  ${min} caracteres`)
    .required("La contraseña es requerida"),
  nuevoPassword: yup
    .string()
    .min(8, ({ min }) => `Ingrese una contraseña mayor a  ${min} caracteres`)
    .required("La contraseña es requerida"),
  ReIngreseNuevoPassword: yup
    .string()
    .min(8, ({ min }) => `Ingrese una contraseña mayor a  ${min} caracteres`)
    .required("La contraseña es requerida"),
});
export const cbuValidation = yup.object().shape({
  cbu: yup
    .string()
    .test("len", "Debe poseer 22 digitos", (value) => value.length === 22)
    // .max(22, ({ max }) => `El CBU debe contar con  ${max} digitos`)
    // .min(22, ({ min }) => `El CBU debe contar con  ${min} digitos`)
    .required("Ingrese el CBU"),
});

export const dataValidation = yup.object().shape({
  cuit: yup
    .string()
    .test("len", "Debe poseer 11 digitos", (value) => value.length === 11)
    .required("ingrese el CUIT"),
  dni: yup
    .string()
    .test("len", "Debe poseer 8 digitos", (value) => value.length ===8)
    .required("ingrese el DNI")
});