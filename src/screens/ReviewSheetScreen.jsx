import { useNavigation } from "@react-navigation/native"
import React, { useState, useEffect } from "react"
import { useSelector, connect, useDispatch } from "react-redux"
import { View, StyleSheet, Text, Button, ScrollView } from "react-native"

import { enterStudents } from "../state/actions"
import QSButton from "../components/QSButton"
import Sheet from "../components/Sheet"
import NumberInput from "../components/NumberInput"
import font from "../constants/font"
import colors from "../constants/colors"

const ReviewSheetScreen = props => {
  const navigation = useNavigation()
  const [numberOfStudents, setNumberOfStudents] = useState(10)

  const questionSheet = useSelector(state => state.questionReducer.questions)
  // console.log("rqs", questionSheet)

  const dispatch = useDispatch()

  const studentsHandler = students => {
    // TODO: only integers allowed ?
    setNumberOfStudents(students)
    dispatch(enterStudents(numberOfStudents))
  }

  // confirm no. of students in store
  useEffect(() => {
    console.log(props.students)
  }, [numberOfStudents])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Does this look right?</Text>
        <Sheet data={questionSheet} isAnswers={false} />
      </View>
      <NumberInput onInput={studentsHandler} />
      <QSButton
        onPressFunction={() => navigation.navigate("Class sheets")}
        title={"Generate sheets for class"}
      />
    </ScrollView>
  )
}

export default connect(mapStateToProps, { enterStudents })(ReviewSheetScreen)

const mapStateToProps = state => {
  return {
    questions: state.questionReducer.questions,
    students: state.studentsReducer, // number not in store prehaps ?
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.background,
  },
  textHeader: {
    textAlign: "center",
    marginVertical: 15,
    fontSize: font.fontSizes.headerText,
  },
})
