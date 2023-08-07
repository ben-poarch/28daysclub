//https://calendly.com/jncoaching_
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
//import { WebView } from "react-native-webview";

export default function CalendlyScreen(navigation) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.back}>
        <Text style={styles.backText}>Go back</Text>
      </View>
      {/* <WebView
        style={styles.web}
        source={{ uri: "https://calendly.com/jncoaching_" }}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  back: { flex: 0.1 },
  backText: {
    fontSize: 18,
  },
  web: {
    flex: 1,
  },
});
