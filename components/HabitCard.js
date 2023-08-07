import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "/Users/benpoarch/28daysclub/Styles.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";

export default function HabitCard() {
  const [count, setCount] = React.useState(0);
  const [target, setTarget] = React.useState(5); //todo change this depending on input

  increseCount = () => {
    if (count < target) {
      setCount(count + 1);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        increseCount();
      }}
      style={styles.habitCardContainer}
    >
      <Ionicons
        style={{ alignSelf: "center", flex: 1, marginLeft: 25 }}
        name={"water"}
        size={35}
        color={"blue"}
      />
      <Text
        style={{
          flex: 3,
          margin: 25,
          fontSize: 20,
          fontFamily: "Cairo-Bold",
          color: "white",
          alignSelf: "center",
        }}
      >
        Drink Water
      </Text>
      <View
        style={{
          justifyContent: "center",

          flex: 2,
        }}
      >
        <Text
          style={{
            marginLeft: 10,
            fontSize: 25,
            fontFamily: "Cairo-Bold",
            color: "#ffee1d",
          }}
        >
          {count}/{target}
        </Text>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 18,
            fontFamily: "Cairo-Regular",
            color: "white",
          }}
        >
          glasses
        </Text>
      </View>
    </TouchableOpacity>
  );
}
