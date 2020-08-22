import React from "react"
import { View, StyleSheet, Image, Button, ScrollView } from "react-native"
import QSButton from "../components/QSButton"
import colors from "../constants/colors"

const StartScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <View style={styles.container}>
      <View>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/questation-logo.png")} style={styles.logo} />
        </View>
        <View style={styles.buttons}>
          <QSButton
            onPressFunction={() => navigation.navigate("Create your questions")}
            title="Start"
          />
          <QSButton onPressFunction={() => navigation.navigate("More")} title="More" />
        </View>
      </View>
    </View>
  </ScrollView>
)

export default StartScreen

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 80,
    backgroundColor: colors.background,
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
