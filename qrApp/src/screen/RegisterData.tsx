import React from "react";
import FormData from "../components/FormData/FormData";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function RegisterData(): JSX.Element {
  return (
    <>
      <SafeAreaView >
        <ScrollView >
          <View style={styles.container}>
            <Text style={styles.text}>Ingrese sus datos </Text>
            <View style={styles.form}>
            <FormData />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems:"center",
    marginTop:100
  },
  text: {
    fontWeight: "400",
    fontSize: 34,
  },
  form:{
    width:"80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },

});
