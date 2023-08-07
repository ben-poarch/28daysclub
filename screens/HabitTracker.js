import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
  ScrollView,
} from "react-native";
import HabitCard from "../components/HabitCard";
import ProfileIcon from "../components/ProfileIcon";
import Habit from "../components/Habit";

export default function HabitTracker() {
  const [habit, setHabit] = useState();
  const [icon, setIcon] = useState();
  const [iconItems, setIconItems] = useState([]);
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(5);
  const [countItems, setCountItems] = useState([]);
  const [targetItems, setTargetItems] = useState([]);
  const [unit, setUnit] = useState("times");
  const [habitItems, setHabitItems] = useState([]);

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    if (!iconItems.indexOf(randomColor) >= 0) {
      return `#${randomColor}`;
    } else {
      generateColor();
    }
  };

  const handleAddHabit = () => {
    if (habit != null) {
      Keyboard.dismiss();
      setHabitItems([...habitItems, habit]);
      setCountItems([...countItems, count]);
      setTargetItems([...targetItems, target]);
      setIconItems([...iconItems, generateColor()]);
      setHabit(null);
    }
  };

  const removeHabit = (index) => {
    let itemsCopy = [...habitItems];
    itemsCopy.splice(index, 1);
    setHabitItems(itemsCopy);
  };

  const increaseCount = (index) => {
    let newCountItems = [...countItems];
    if (countItems[index] < targetItems[index]) {
      newCountItems[index] = newCountItems[index] + 1;
    }
    setCountItems(newCountItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's habits</Text>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.items}>
              {habitItems.map((item, index) => {
                return (
                  //<TouchableOpacity key={index} onPress={() => removeHabit(index)}>
                  <TouchableOpacity
                    key={index}
                    onPress={() => increaseCount(index)}
                  >
                    <Habit
                      key={index}
                      icon={iconItems[index]}
                      text={item}
                      count={countItems[index]}
                      target={targetItems[index]}
                      unit={unit}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a habit"
          value={habit}
          onChangeText={(text) => setHabit(text)}
        />
        <TouchableOpacity onPress={() => handleAddHabit()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 30,

    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "grey",
    borderWidth: 2,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 2,
  },
  addText: {},
});
