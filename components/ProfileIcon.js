import * as React from "react";
import { Text, View, Image, SafeAreaView } from "react-native";
import styles from "/Users/benpoarch/28daysclub/Styles.js";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ProfileIcon(props) {
  return (
    <SafeAreaView style={styles.profileIconContainer}>
      <Image source={props.image} style={styles.profileImage} />
    </SafeAreaView>
  );
}
