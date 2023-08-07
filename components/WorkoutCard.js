import * as React from "react";
import { Text, View, Image } from "react-native";
import styles from "/Users/benpoarch/28daysclub/Styles.js";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function WorkoutCard(props) {
  return (
    <View style={styles.habitCardContainer}>
      <Text
        style={{
          alignSelf: "center",
          flex: 1,
          color: "#ffe200",
          fontFamily: "Cairo-ExtraBold",
          left: 20,
          fontSize: 25,
        }}
      >
        {props.day}
      </Text>
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
        {props.title}
      </Text>

      {/* <View
        style={{
          justifyContent: "center",
          flexDirection: "column",
          flex: 2,
        }}
      >
        <View style={{ backgroundColor: "red", flex: 1 }}>
          <Text
            style={{
              flex: 2,
              bottom: -25,
              //fontSize: "20",
              fontFamily: "Cairo-Bold",
              color: "white",
            }}
          >
            {props.title}
          </Text>
        </View>
        <View style={{ backgroundColor: "blue", flex: 1 }}>
          <Text
            style={{
              flex: 1,
              //fontSize: "18",
              fontFamily: "Cairo-Regular",
              color: "white",
            }}
          >
            {props.workout}
          </Text>
        </View>
      </View> */}
    </View>
  );
}
