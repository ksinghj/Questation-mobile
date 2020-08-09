// import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, ScrollView, Keyboard, TouchableWithoutFeedback } from "react-native"
import StartScreen from "./screens/StartScreen"

import { createStore } from "redux"
import reducers from "./state/reducers"
import { Provider } from "react-redux"

const store = createStore(reducers)

export default function App() {
  return (
    // TODO: TouchableWithoutFeedback causing user to press button twice to add url, not good UX STILL ON QS CHECK ?
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView style={styles.container}>
          <StartScreen />
        </ScrollView>
      </TouchableWithoutFeedback>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 20,
  },
})
