import React, { useRef } from "react"
import { useSelector } from "react-redux"
import { Text, StyleSheet, View, ScrollView, FlatList } from "react-native"
import Sheet from "../components/Sheet"
import QSButton from "../components/QSButton"
import font from "../constants/font"
import colors from "../constants/colors"

const QuestionSheets = props => {
  const students = useSelector(state => state.studentsReducer)
  const classAll = useSelector(state => state.classReducer)

  // number of students to map for a Sheet
  let studentsNumberAsArr = new Array(students)

  const renderSheet = () => {
    return classAll.map((q, index) => {
      return <Sheet data={q} sheetNumber={index + 1} isAnswers={false} />
    })
  }

  const scrollTopRef = useRef(null)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Question Sheets</Text>
      <Text style={styles.header}>{students}</Text>
      <FlatList data={studentsNumberAsArr} renderItem={renderSheet} ref={scrollTopRef} />
      <QSButton
        onPressFunction={() => {
          scrollTopRef.current.scrollToOffset({ offset: 0, animated: true })
        }}
        title={"Scroll to top"}
      />
    </View>
  )
}

export default QuestionSheets

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingVertical: 20,
    paddingBottom: 100,
  },
})
