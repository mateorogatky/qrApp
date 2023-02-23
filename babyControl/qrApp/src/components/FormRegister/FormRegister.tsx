import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Formik, Field } from "formik";

import { DataLogin, DataRegister } from "../../utils/Interface";
import { Button } from "react-native-elements";
import CustomInput from "../../CustomInputv1/CustomInput";
import { registerValidation } from "../../utils/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addLogin } from "../../feactures/user/userSlice";
import { useAppDispatch } from "../../app/hooks";

export default function FormRegister({
  setIsVisible,
}: {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = (data: DataRegister) => {
    // mandar a base de datos
    
  };

  return (
    <View style={styles.containerView}>
      <Formik
        validationSchema={registerValidation}
        initialValues={{
          email: "",
          nombre: "",
          apellido: "",
          contrasena: "",
        }}
        onSubmit={onSubmit}>
        {({ handleSubmit, isValid, values }) => (
          <>
            <Field
              labelStyle={styles.labelStyle}
              textInput={styles.textInput}
              errorInput={styles.errorText}
              containerStyle={[styles.containerStyle, { marginTop: 20 }]}
              inputContainerStyle={styles.inputContainerStyle}
              iconStyle={styles.iconStyle}
              stylesTextInput={styles.textInput}
              label="Escribe tu Email"
              name="email"
              component={CustomInput}
              placeholder="Ingrese su Email"
              keyboardType="email-address"
              icon="check"
            />
            <Field
              labelStyle={styles.labelStyle}
              textInput={styles.textInput}
              errorInput={styles.errorText}
              containerStyle={[styles.containerStyle, { marginTop: 20 }]}
              inputContainerStyle={styles.inputContainerStyle}
              iconStyle={styles.iconStyle}
              label="Nombre"
              name="nombre"
              component={CustomInput}
              placeholder="Ingrese su Nombre"
            />
            <Field
              labelStyle={styles.labelStyle}
              textInput={styles.textInput}
              errorInput={styles.errorText}
              containerStyle={[styles.containerStyle, { marginTop: 20 }]}
              inputContainerStyle={styles.inputContainerStyle}
              iconStyle={styles.iconStyle}
              label="Apellido"
              name="apellido"
              component={CustomInput}
              placeholder="Ingrese su Apellido"
            />

            <Field
              labelStyle={styles.labelStyle}
              textInput={styles.textInput}
              errorInput={styles.errorText}
              containerStyle={[styles.containerStyle, { marginTop: 20 }]}
              inputContainerStyle={styles.inputContainerStyle}
              iconStyle={styles.iconStyle}
              label="Contraseña"
              name="contrasena"
              component={CustomInput}
              placeholder="Ingrese su contraseña"
              icon={showPassword ? "eye-off" : "eye"}
              type={showPassword ? "text" : "password"}
              onIconPress={() => setShowPassword(!showPassword)}
              secureTextEntry={!showPassword}
            />
            <Button
              title="Registrar"
              buttonStyle={styles.buttonStyle}
              containerStyle={styles.buttonContainerStyle}
              onPress={handleSubmit}
              disabled={!isValid || !values.email || !values.contrasena}
            />
          </>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  containerView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    flex: 1,
    marginTop: 30,
  },
  buttonStyle: {
    borderRadius: 30,
    backgroundColor: "#2334d0",
    height: 50,
  },
  buttonContainerStyle: {
    width: "80%",
  },
  //estilos del input
  //style input
  textInput: {
    width: "100%",
    color: "#2334d0",
  },
  containerStyle: {
    width: "85%",
    backgroundColor: "transparent",
  },
  errorText: {
    fontSize: 12,
    color: "#FD387A",
  },
  checkIconStyle: {
    color: "#2334d0",
  },
  iconStyle: {
    color: "#a8bcda",
  },
  inputContainerStyle: {
    borderColor: "transparent",
    backgroundColor: "#F4F5F9",
    borderRadius: 15,
    color: "#2334d0",
  },
  labelStyle: {
    fontWeight: "400",
  },
});
