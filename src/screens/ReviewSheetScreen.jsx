import { useNavigation } from "@react-navigation/native"
import React, { useState, useEffect } from "react"
import { useSelector, connect, useDispatch } from "react-redux"
import { View, StyleSheet, Text, Button, ScrollView } from "react-native"
import { replaceNums, getAnswer, clearQuestionsArr } from "../api/alg"
import { enterStudents, answers, createAClass } from "../state/actions"
import QSButton from "../components/QSButton"
import Sheet from "../components/Sheet"
import NumberInput from "../components/NumberInput"
import Textarea from "../components/Textarea"
// import font from "../constants/font"
import colors from "../constants/colors"

const ReviewSheetScreen = props => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [numberOfStudents, setNumberOfStudents] = useState(10)

  // store state
  const questions = useSelector(state => state.questionReducer.questions)
  const students = useSelector(state => state.studentsReducer)

  const studentsHandler = students => {
    // TODO: only integers allowed ?
    setNumberOfStudents(students)
  }

  // confirm no. of students in store
  useEffect(() => {
    dispatch(enterStudents(numberOfStudents))
  }, [numberOfStudents])

  const generateSheets = async () => {
    // class (classAll) to store
    let classArr = []

    for (let index = 0; index < students; index++) {
      let newQuestions = {}
      newQuestions.one = replaceNums(questions.question1)
      newQuestions.two = replaceNums(questions.question2)
      newQuestions.three = replaceNums(questions.question3)
      newQuestions.four = replaceNums(questions.question4)
      newQuestions.five = replaceNums(questions.question5)
      classArr.push(newQuestions)

      let ans = getAnswer(newQuestions)
      dispatch(answers(ans))
    }
    clearQuestionsArr()
    await dispatch(createAClass(classArr))

    navigation.navigate("Class sheets")
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Textarea texts={["Does this look right?"]} />
        <Sheet data={questions} isAnswers={false} />
      </View>
      <NumberInput onInput={studentsHandler} />
      <QSButton
        style={{ marginBottom: 400 }}
        onPressFunction={() => generateSheets()}
        title={"Generate sheets for class"}
      />
    </ScrollView>
  )
}

export default connect(null, { enterStudents, answers, createAClass })(ReviewSheetScreen)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.background,
  },
})
