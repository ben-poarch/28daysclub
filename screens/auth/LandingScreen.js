import * as React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Modal,
} from "react-native";
import styles from "/Users/benpoarch/28daysclub/Styles.js";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export default function LandingScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Cairo-Regular": require("/Users/benpoarch/28daysclub/assets/fonts/Cairo-Regular.ttf"),
    "Cairo-ExtraBold": require("/Users/benpoarch/28daysclub/assets/fonts/Cairo-ExtraBold.ttf"),
    "Cairo-Bold": require("/Users/benpoarch/28daysclub/assets/fonts/Cairo-Bold.ttf"),
    "Cairo-Black": require("/Users/benpoarch/28daysclub/assets/fonts/Cairo-Black.ttf"),
    "Cairo-Light": require("/Users/benpoarch/28daysclub/assets/fonts/Cairo-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      onLayout={onLayoutRootView}
      source={require("/Users/benpoarch/28daysclub/assets/background.jpg")}
      resizeMode="cover"
      style={{ flex: 1, width: "100%" }}
    >
      <View
        style={[
          styles.container,
          styles.loginContainer,
          { backgroundColor: "transparent" },
        ]}
      >
        <Image
          style={styles.logo}
          source={require("/Users/benpoarch/28daysclub/assets/minilogonobg.png")}
        />
      </View>

      <View style={styles.landingScreenButtonContainer}>
        <TouchableOpacity
          style={styles.landingScreenButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.ButtonText}>JOIN THE CLUB</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.landingScreenButton,
            {
              backgroundColor: "black",
              borderColor: "white",
              borderWidth: 1,
            },
          ]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.ButtonText, { color: "white" }]}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
