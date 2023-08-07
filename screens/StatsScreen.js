import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import styles from "../Styles";
import ProfileIcon from "../components/ProfileIcon";
import axios from "axios";

//strava api access token: { 5e9e9f517d8388c3dd7147291a5a3363e9b9e66b }

export default function StatsScreen() {
  return (
    <SafeAreaView style={[styles.container, styles.habitTrackerContainer]}>
      <Text style={{ color: "white" }}>Stats</Text>
    </SafeAreaView>
  );
}
