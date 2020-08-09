import React from "react"
import { connect } from "react-redux"
import { View, StyleSheet, Image, Button } from "react-native"
import { changeScreen } from "../state/actions"

const StartScreen = props => (
  <View style={styles.container}>
    <View>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/questation-logo.png")} style={styles.logo} />
      </View>
      <View style={styles.buttons}>
        <Button title="Start" onPress={changeScreen("QuestionCreateScreen")}></Button>
        <Button title="More"></Button>
      </View>
    </View>
  </View>
)

const mapStateToProps = state => {
  return { screenReducer: state.screenReducer }
}

export default connect(mapStateToProps, { changeScreen })(StartScreen)

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 100,
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
