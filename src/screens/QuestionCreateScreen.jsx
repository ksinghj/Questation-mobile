import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const QuestionCreateScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button onPress={() => navigation.navigate("Start")} title="Go Back"></Button>
    <Text>QuestionCreateScreen</Text>
  </View>
)

export default QuestionCreateScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
