import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import Textarea from "../components/Textarea"
import QSButton from "../components/QSButton"

const QuestionCreateScreen = () => (
  <View style={styles.container}>
    <Textarea
      texts={[
        "Questation only allows 5 questions for now. Ommit all commas.",
        "Warning: After pressing continue you won't be able to edit your questions, so double check!",
      ]}
    />
    <QSButton title="Continue" />
  </View>
)

export default QuestionCreateScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
