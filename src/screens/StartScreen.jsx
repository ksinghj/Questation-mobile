import React from "react"
import { View, StyleSheet, Image, Button, TouchableWithoutFeedback, ScrollView } from "react-native"

const StartScreen = ({ navigation }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View>
          <View style={styles.logoContainer}>
            <Image source={require("../assets/questation-logo.png")} style={styles.logo} />
          </View>
          <View style={styles.buttons}>
            <Button
              onPress={() => navigation.navigate("Create your questions")}
              title="Start"
            ></Button>
            <Button title="More"></Button>
          </View>
        </View>
      </View>
    </ScrollView>
  </TouchableWithoutFeedback>
)

export default StartScreen

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 80,
    backgroundColor: "#fff",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
})
