import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const QuestionCreateScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button onPress={() => navigation.navigate("Start")} title="Go Back"></Button>
    <Text>Questation only allows 5 questions for now. Ommit all commas.</Text>
    <Text>
      Warning: After pressing continue you won't be able to edit your questions, so double check!
    </Text>
  </View>
)

export default QuestionCreateScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
