import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Platform, Linking } from "react-native";
import * as Font from "expo-font";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { addLogin } from "../feactures/user/userSlice";

//screens
import LoginEmail from "../screen/LoginEmail";
import Login from "../screen/Login";
import Register from "../screen/Register";
import TabsNavigation from "./TabsNavigation";

import { useAppDispatch, useAppSelector } from "../app/hooks";

const Stack = createNativeStackNavigator();

export default function navigation(): JSX.Element {

  const dispatch = useAppDispatch();
  //STATE TRAE TODA LA ESTRUCTURA DEL LOCAL STORAGE
  const selector = useAppSelector((state) => state.user);

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
              name="Login_Email"
              component={LoginEmail}
              options={{ header: () => null, orientation: "portrait" }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ header: () => null, orientation: "portrait" }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
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
  textHeader: {
    // width: '90%',
    fontFamily: "rockwell",
    color: "#2334d0",
    fontSize: 30,
    textAlign: "center",
  },
});