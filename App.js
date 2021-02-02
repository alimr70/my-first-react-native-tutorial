import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  SafeAreaView,
  Alert,
  Button,
  StatusBar,
  Platform,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  console.log("It works");
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen />
      {/* <Text>Hello from React Native app!</Text>
      <TouchableHighlight onPress={() => console.log("Icon Pressed!")}>
        <Image
          source={require("./app/assets/icon.png")}
          style={{ width: 100, height: 100 }}
        />
      </TouchableHighlight>
      <Button
        title="Click Me!"
        onPress={() => Alert.alert("Terms", "Do you agree?", [{ text: "yes" }])}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
