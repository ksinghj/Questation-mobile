import React from "react"
import { useSelector } from "react-redux"
import { Text, StyleSheet, View, ScrollView } from "react-native"
import Sheet from "../components/Sheet"
import font from "../constants/font"
import colors from "../constants/colors"

const QuestionSheets = props => {
  const students = useSelector(state => state.studentsReducer)
  const classAll = useSelector(state => state.classReducer)

  const renderSheets = () => {
    console.log("classAll", classAll)
    return classAll.map((q, index) => {
      return <Sheet data={q} sheetNumber={index} isAnswers={false} />
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Question Sheets</Text>
      <Text style={styles.header}>{students}</Text>
      {renderSheets()}
    </View>
  )
}

export default QuestionSheets

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
})
