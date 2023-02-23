import React from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/core";
import { View } from "react-native";
//screen
import Home from "../screen/Home/Home";

// Libreria de Iconos
import { Feather } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

export default function TabsNavigation(): JSX.Element {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
        tabBarShowLabel: false,
        tabBarStyle: {
          width: Platform.OS === "ios" ? "97%" : "100%",
          marginLeft: Platform.OS === "ios" ? 5 : 0,
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          elevation: 0,
          borderRadius: 0,
          height: 70,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <SafeAreaView>
              <TouchableOpacity
                style={styles.tabContainer}
                onPress={() => navigation.navigate("Home")}>
                <View>
                  <Feather
                    name="home"
                    size={35}
                    color={focused ? "#2334D0" : "#A8BCDA"}
                  />
                </View>
                <Text style={focused ? styles.tabLabelF : styles.tabLabel}>
                  Inicio
                </Text>
              </TouchableOpacity>
            </SafeAreaView>
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
  tabContainer: {
    // flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    // width: '100%',
    flexWrap: "wrap",
  },
  iconStyle: {
    width: 35,
    height: 35,
  },
  tabLabel: {
    overflow: "hidden",
    color: "#A8BCDA",
    fontSize: 14,
    // marginLeft: 5,
  },
  tabLabelF: {
    overflow: "hidden",
    color: "#2334D0",
    fontSize: 14,
    // marginLeft: 5,
  },
  qrIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#A8BCDA",
  },
  qrIconF: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#2334D0",
  },
});
