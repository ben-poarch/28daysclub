import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/auth/LandingScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import MainContainer from "./MainContainer";
import CalendlyScreen from "./screens/webviews/CalendlyScreen";

// import { useState, useEffect } from "react";
// import auth from "@react-native-firebase/auth";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="Calendly" component={CalendlyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
