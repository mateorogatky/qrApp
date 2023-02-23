import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Text, StyleSheet, SafeAreaView } from "react-native";
import RegisterData from "../RegisterData";
export default function Home(): JSX.Element {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
      <Text style={styles.textHola}>QR APP</Text>
        <RegisterData/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    marginTop:30
  },
  safeArea: { flex: 1 },
  textHola: {
    fontWeight: "400",
    fontSize: 34,
    marginTop: 50,
    textAlign:"center"
  },
  
});
