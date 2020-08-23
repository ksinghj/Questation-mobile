import { useNavigation } from "@react-navigation/native"
import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { connect, useSelector, useDispatch } from "react-redux"
import { createQuestionSheet } from "../state/actions"
import QSButton from "../components/QSButton"

// TODO: Make Form component more modular (for practice not necessarily needed)

const Form = () => {
  // Access the navigation prop from any component
  const navigation = useNavigation()

  const dispatch = useDispatch()
  // Form state
  const [question1, setQuestion1] = useState("")
  const [question2, setQuestion2] = useState("")
  const [question3, setQuestion3] = useState("")
  const [question4, setQuestion4] = useState("")
  const [question5, setQuestion5] = useState("")

  const [questionSheet, setQuestionSheet] = useState({
    question1,
    question2,
    question3,
    question4,
    question5,
  })

  // TODO: fix this - surely there's a cleaner solution!!!...
  // update question and sheet every press - seems
  // overkill but works 100% of the time (MVP OK for now)
  useEffect(() => {
    setQuestion1(question1)
    submitSheetToStore()
  }, [question1])
  useEffect(() => {
    setQuestion2(question2)
    submitSheetToStore()
  }, [question2])
  useEffect(() => {
    setQuestion3(question3)
    submitSheetToStore()
  }, [question3])
  useEffect(() => {
    setQuestion4(question4)
    submitSheetToStore()
  }, [question4])
  useEffect(() => {
    setQuestion5(question5)
    submitSheetToStore()
  }, [question5])

  useEffect(() => {
    setQuestionSheet(questionSheet)
  }, [questionSheet])

  const submitSheetToStore = () => {
    setQuestionSheet({ question1, question2, question3, question4, question5 })
    dispatch(createQuestionSheet(questionSheet))
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <TextInput
          placeholder="328 + 10 / 2"
          style={styles.questionInput}
          onChangeText={q => setQuestion1(q)}
        />
        <TextInput style={styles.questionInput} onChangeText={q => setQuestion2(q)} />
        <TextInput style={styles.questionInput} onChangeText={q => setQuestion3(q)} />
        <TextInput style={styles.questionInput} onChangeText={q => setQuestion4(q)} />
        <TextInput style={styles.questionInput} onChangeText={q => setQuestion5(q)} />
      </View>
      <QSButton
        onPressFunction={() => {
          submitSheetToStore()
          navigation.navigate("Review question sheet")
        }}
        title="Continue"
      />
    </View>
  )
}

export default connect(null, { createQuestionSheet })(Form)

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputs: {
    marginBottom: 20,
  },
  questionInput: {
    borderColor: "rgba(158, 150, 150, 0.5)",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
  },
})
