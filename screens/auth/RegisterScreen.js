import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import styles from "/Users/benpoarch/28daysclub/Styles.js";
import { useState } from "react";
//import { firebase } from "/Users/benpoarch/28daysclub/Firebase";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterScreen({ navigation }) {
  //const [username, setUsername] = React.useState("");
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = React.useState("");

  function register(auth, email, password) {
    navigation.navigate("Habit Tracker");
  }

  //const auth = getAuth();
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

  return (
    <ImageBackground
      source={require("/Users/benpoarch/28daysclub/assets/background.jpg")}
      resizeMode="cover"
      style={{ flex: 1, width: "100%" }}
    >
      <View style={[styles.container, styles.loginContainer]}>
        <Image
          style={styles.logo}
          source={require("/Users/benpoarch/28daysclub/assets/minilogonobg.png")}
        />
        <TextInput
          style={[styles.textInput, styles.textInputText]}
          onChangeText={setEmail}
          value={email}
          placeholder="EMAIL"
          placeholderTextColor={"grey"}
        ></TextInput>

        {/* <TextInput
          style={[styles.textInput, styles.textInputText]}
          onChangeText={setUsername}
          value={username}
          placeholder="USERNAME"
          placeholderTextColor={"grey"}
        ></TextInput> */}

        <TextInput
          style={[styles.textInput, styles.textInputText]}
          onChangeText={setPassword}
          value={password}
          placeholder="PASSWORD"
          placeholderTextColor={"grey"}
          secureTextEntry={true}
        ></TextInput>

        <TouchableOpacity
          style={styles.landingScreenButton}
          onPress={() =>
            createUserWithEmailAndPassword(auth, username, password)
          }
        >
          <Text style={styles.ButtonText}>JOIN THE CLUB</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
