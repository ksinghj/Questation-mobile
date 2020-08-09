import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const QuestionCreateScreen = () => (
  <View style={styles.container}>
    <Button onPress={() => console.log("go back to start pressed")} title="Go Back"></Button>
    <Text>QuestionCreateScreen</Text>
  </View>
)

export default QuestionCreateScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
