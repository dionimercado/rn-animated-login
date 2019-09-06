import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar
} from "react-native";

export default () => {
  const { height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ ...StyleSheet.absoluteFill }}>
        <Image
          source={require("../../assets/bg.jpg")}
          style={{ flex: 1, height: null, width: null }}
        />
      </View>
      <View style={{ ...styles.actions, height: height / 3 }}>
        <View style={styles.button}>
          <Text style={styles.buttonTxt}>Sign In</Text>
        </View>
        <View style={{ ...styles.button, backgroundColor: "#2e71dc" }}>
          <Text style={{ ...styles.buttonTxt, color: "white" }}>
            Sign In with Facebook
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "white"
  },
  actions: {
    justifyContent: "center"
  },
  button: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5
  },
  buttonTxt: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});
