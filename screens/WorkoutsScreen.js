import * as React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "../Styles";
import WorkoutCard from "../components/WorkoutCard";
import ProfileIcon from "../components/ProfileIcon";

export default function WorkoutsScreen(navigation) {
  return (
    <SafeAreaView style={[styles.container, styles.habitTrackerContainer]}>
      <Text style={{ color: "white" }}>Workouts</Text>

      <TouchableOpacity style={{ width: "100%", height: 200 }}>
        <Image
          source={require("/Users/benpoarch/28daysclub/assets/jncoaching.jpeg")}
          style={{ height: 200 }}
        />
      </TouchableOpacity>
      <ScrollView style={{ flex: 2.5 }}>
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
      </ScrollView>
    </SafeAreaView>
  );
}

/*
todo
- add overlaying screen for settings/admin/edit profile etc
- overlaying screen for workout screen workout details
- leaderboards screen?
- habits UI
- firebase auth
- firebase database access
- chat screen
*/
