import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";

import styles from "../Styles";
import ProfileIcon from "../components/ProfileIcon";

export default function ClubScreen() {
  return (
    <SafeAreaView style={[styles.container, styles.habitTrackerContainer]}>
      <Text style={{ color: "white" }}>Club</Text>
    </SafeAreaView>
  );
}
