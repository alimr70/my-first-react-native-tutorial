import React from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/splash.png")}>
      <Text>Welcom!</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default WelcomeScreen;
