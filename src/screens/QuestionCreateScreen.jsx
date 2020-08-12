import React from "react"
import { View, Text, StyleSheet, Button, ScrollView } from "react-native"
import Textarea from "../components/Textarea"
import Form from "../components/Form"

const QuestionCreateScreen = () => (
  <ScrollView style={styles.container}>
    <Textarea
      texts={[
        "Questation only allows 5 questions for now. Ommit all commas.",
        "Warning: After pressing continue you won't be able to edit your questions, so double check!",
      ]}
    />
    <Form />
  </ScrollView>
)

export default QuestionCreateScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
