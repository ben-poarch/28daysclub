import React, { Component, useState } from "react";
import {
  Image,
  TouchableOpacity,
  Modal,
  View,
  Text,
  Button,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { useWindowDimensions } from "react-native";

import ProfileIcon from "./components/ProfileIcon";

import HabitTracker from "./screens/HabitTracker";
import WorkoutsScreen from "./screens/WorkoutsScreen";
import ClubScreen from "./screens/ClubScreen";
import StatsScreen from "./screens/StatsScreen";

const habitTrackerName = "Habits";
const workoutsName = "Workouts";
const statsName = "Stats";
const clubName = "Club";
const addHabitName = "Add Habit";

const activelogo = require("/Users/benpoarch/28daysclub/assets/minilogonobg.png");
const whitelogo = require("/Users/benpoarch/28daysclub/assets/logowhitenobg.png");

const Tab = createBottomTabNavigator();

nullAddHabit = () => {
  return null;
};

export default MainContainer = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    "Cairo-Regular": require("/Users/benpoarch/28daysclub/assets/fonts/Cairo-Regular.ttf"),
    "Cairo-ExtraBold": require("/Users/benpoarch/28daysclub/assets/fonts/Cairo-ExtraBold.ttf"),
    "Cairo-Bold": require("/Users/benpoarch/28daysclub/assets/fonts/Cairo-Bold.ttf"),
    "Cairo-Black": require("/Users/benpoarch/28daysclub/assets/fonts/Cairo-Black.ttf"),
    "Cairo-Light": require("/Users/benpoarch/28daysclub/assets/fonts/Cairo-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer independent={true} onLayout={onLayoutRootView}>
        {/* <ProfileIcon
          image={require("/Users/benpoarch/28daysclub/assets/benprofile.jpg")}
        /> */}
        <Tab.Navigator
          initialRouteName={HabitTracker}
          screenOptions={({ route }) => ({
            style: { padding: 10, height: 100 },
            tabBarShowLabel: true,

            tabBarLabelStyle: { paddingTop: 0 },
            headerShown: false,
            tabBarActiveTintColor: "#ffe200",
            tabBarInactiveTintColor: "white",

            tabBarStyle: {
              backgroundColor: "black",
              borderTopColor: "black",
              // borderWidth: 1,
            },
            headerTitleStyle: {
              fontFamily: "Cairo-Bold",
              fontSize: 20,
            },
          })}
        >
          <Tab.Screen
            name={habitTrackerName}
            component={HabitTracker}
            options={{
              tabBarIcon: ({ color }) => {
                return (
                  <Ionicons
                    //style={{ top: 5 }}
                    name={"browsers-outline"}
                    size={30}
                    color={color}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name={workoutsName}
            component={WorkoutsScreen}
            options={{
              tabBarIcon: ({ color }) => {
                return (
                  <Ionicons
                    //style={{ top: 5 }}
                    name={"barbell-outline"}
                    size={30}
                    color={color}
                  />
                );
              },
            }}
          />

          <Tab.Screen
            name={statsName}
            component={StatsScreen}
            options={{
              tabBarIcon: ({ color }) => {
                return (
                  <Ionicons
                    //style={{ top: 0 }}
                    name={"podium-outline"}
                    size={30}
                    color={color}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name={clubName}
            component={ClubScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    style={{ width: 120, height: 120 }}
                    source={focused ? activelogo : whitelogo}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};
