import React from "react"
import { Text, StyleSheet, View } from "react-native"
import font from "../constants/font"
import colors from "../constants/colors"

const QuestionSheets = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Class Sheets</Text>
    </View>
  )
}

export default QuestionSheets

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
})
