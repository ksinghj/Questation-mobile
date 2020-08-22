import React from "react"
import { View, Text, StyleSheet, Button, ScrollView } from "react-native"
import Textarea from "../components/Textarea"
import Form from "../components/Form"
import colors from "../constants/colors"

const QuestionCreateScreen = () => (
  <ScrollView style={styles.container}>
    <Textarea texts={["Questation only allows 5 questions for now. Ommit all commas."]} />
    <Form />
  </ScrollView>
)

export default QuestionCreateScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.background,
  },
})
