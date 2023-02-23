import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens

import RegisterData from "../screen/RegisterData";
import TabsNavigation from "./TabsNavigation";
import QR from "../screen/QR";

const Stack = createNativeStackNavigator();

export default function navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <>
          <Stack.Screen
            name="Tabs-Navigation"
            component={TabsNavigation}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="RegisterData"
            component={RegisterData}
            options={{ header: () => null, orientation: "portrait" }}
          />
          <Stack.Screen
            name="QR"
            component={QR}
            options={{ header: () => null, orientation: "portrait" }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerViewHeader: {
    // marginTop: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 58,
    backgroundColor: "#F2F2F2",
  },
  IOS: {
    marginTop: 40,
  },
});
