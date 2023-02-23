import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import { useAppDispatch } from "../../app/hooks";

export default function Home(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.containerView}>
          <Text style={styles.textHola}>Hola</Text>
          <Text style={styles.textHola}>Este es el home</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    marginTop:20
  },
  safeArea: { flex: 1 },

  textHola: {
    fontWeight: "400",
    fontSize: 34,
    marginLeft: 15,
    marginTop: 25,
  },
});
