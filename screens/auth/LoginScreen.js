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
//import { firebase } from "/Users/benpoarch/28daysclub/Firebase";

//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  function login() {
    navigation.navigate("MainContainer");
  }
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
          onChangeText={setUsername}
          value={username}
          placeholder="USERNAME"
          placeholderTextColor={"grey"}
        ></TextInput>

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
          onPress={() => login()}
        >
          <Text style={styles.ButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
