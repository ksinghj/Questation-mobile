import { useNavigation } from "@react-navigation/native"
import React, { useRef } from "react"
import { useSelector } from "react-redux"
import { Text, StyleSheet, View, ScrollView, FlatList } from "react-native"
import Sheet from "../components/Sheet"
import QSButton from "../components/QSButton"
import font from "../constants/font"
import colors from "../constants/colors"

const QuestionSheets = props => {
  const navigation = useNavigation()
  const students = useSelector(state => state.studentsReducer)
  const classAll = useSelector(state => state.classReducer)

  // number of students to map for FlatList data
  let studentsNumberAsArr = new Array(students)

  const renderSheet = () => {
    return classAll.map((q, index) => {
      return <Sheet data={q} sheetNumber={index + 1} isAnswers={false} />
    })
  }

  const scrollTopRef = useRef(null)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Unique question sheets for the {students} students in your class.
      </Text>
      <FlatList
        style={styles.sheetList}
        data={studentsNumberAsArr}
        renderItem={renderSheet}
        ref={scrollTopRef}
      />
      <View style={styles.buttons}>
        <QSButton
          style={{ marginHorizontal: 50, marginTop: 10 }}
          onPressFunction={() => {
            scrollTopRef.current.scrollToOffset({ offset: 0, animated: true })
          }}
          title={"Scroll to top"}
        />
        <QSButton
          style={{ marginHorizontal: 50, marginTop: 10 }}
          onPressFunction={() => navigation.navigate("Answers")}
          title={"View Answers"}
        />
      </View>
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
  header: {
    textAlign: "center",
    fontSize: font.fontSizes.headerText,
    marginHorizontal: 20,
  },
  sheetList: {
    height: "98%",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 60,
  },
})
