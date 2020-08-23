import { useNavigation } from "@react-navigation/native"
import React, { useState, useEffect } from "react"
import { useSelector, connect, useDispatch } from "react-redux"
import { View, StyleSheet, Text, Button, ScrollView } from "react-native"

import { enterStudents } from "../state/actions"
import QSButton from "../components/QSButton"
import Sheet from "../components/Sheet"
import NumberInput from "../components/NumberInput"
import Textarea from "../components/Textarea"
import font from "../constants/font"
import colors from "../constants/colors"

const ReviewSheetScreen = props => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [numberOfStudents, setNumberOfStudents] = useState(10)
  const questionSheet = useSelector(state => state.questionReducer.questions)

  const studentsHandler = students => {
    // TODO: only integers allowed ?
    setNumberOfStudents(students)
  }

  // confirm no. of students in store
  useEffect(() => {
    dispatch(enterStudents(numberOfStudents))
  }, [numberOfStudents])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Textarea texts={["Does this look right?"]} />
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

export default connect(null, { enterStudents })(ReviewSheetScreen)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.background,
  },
})
