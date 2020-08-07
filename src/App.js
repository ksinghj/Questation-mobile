// import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, ScrollView, Keyboard, TouchableWithoutFeedback, Text } from "react-native"
import StartScreen from "./components/screens/StartScreen"

export default function App() {
  let content
  content = <StartScreen />

  return (
    // TODO: TouchableWithoutFeedback causing user to press button twice to add url, not good UX STILL ON QS CHECK ?
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.container}>
        <StartScreen />
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 20,
  },
})
