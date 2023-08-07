import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";

const Habit = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity
          style={[styles.square, { backgroundColor: props.icon }]}
        />
        <Text style={styles.itemText}>{props.text}</Text>
      </View>

      <Progress.Bar
        progress={props.count / props.target}
        color={props.icon}
        width={125}
      />

      <View style={styles.countContainer}>
        <Text style={[styles.countText, { color: props.icon }]}>
          {props.count}/{props.target}
        </Text>
        <Text style={styles.unitText}>{props.unit}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    //backgroundColor: "#ffee1d",
    //opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
    fontSize: 16,
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: "#ffee1d",

    borderWidth: 3,
    borderRadius: 5,
  },
  countContainer: {
    width: 50,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    fontWeight: "900",
  },
  unitText: {
    fontStyle: "italic",
  },
});

export default Habit;
