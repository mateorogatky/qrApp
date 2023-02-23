import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik, Field } from "formik";

import { Button } from "react-native-elements";
import CustomInput from "../../CustomInputv1/CustomInput";
import { useNavigation } from "@react-navigation/native";


export default function FormData() : JSX.Element {
  const navigation = useNavigation()

  return (
    <View style={styles.containerView}>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
        }}
        onSubmit={() => navigation.navigate("QR")}
      >
        {({ handleSubmit}) => (
          <>
            <Field
              label="Nombre"
              name="nombre"
              component={CustomInput}
              placeholder="Ingrese su Nombre"
            />
            <Field
              label="Apellido"
              name="apellido"
              component={CustomInput}
              placeholder="Ingrese su Apellido"
            />
            <Button
              title="Cargar Datos"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  containerView: {
    width:"80%",
    justifyContent: "center",
    alignItems: "center",
  },
});
