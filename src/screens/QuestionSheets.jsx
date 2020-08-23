import React from "react"
import { useSelector, connect, useDispatch } from "react-redux"
import { Text, StyleSheet, View } from "react-native"
import font from "../constants/font"
import colors from "../constants/colors"

const QuestionSheets = props => {
  const students = useSelector(state => state.studentsReducer)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Question Sheets</Text>
      <Text style={styles.header}>{students}</Text>
    </View>
  )
}

export default connect(null, {})(QuestionSheets)

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
})
