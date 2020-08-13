import { useNavigation } from "@react-navigation/native"
import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { connect, useSelector, useDispatch } from "react-redux"
import { createQuestionSheet } from "../state/actions"
import QSButton from "../components/QSButton"

// TODO:
// - still use hooks for question state but as 5 use useSelector
// const dispatch = useDispatch()
// const questions = useSelector(state => state.questionReducer.questions)

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
  // could be that q's are not updating first try
  // try console logging questions 1 2 etc again
  useEffect(() => {
    setQuestion1(question1)
  }, [question1])
  useEffect(() => {
    setQuestion2(question2)
  }, [question2])
  useEffect(() => {
    setQuestion3(question3)
  }, [question3])
  useEffect(() => {
    setQuestion4(question4)
  }, [question4])
  useEffect(() => {
    setQuestion5(question5)
  }, [question5])

  useEffect(() => {
    setQuestionSheet(questionSheet)
  }, [questionSheet])

  return (
    <View style={styles.container}>
      <View>
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
          setQuestionSheet({ question1, question2, question3, question4, question5 })
          console.log(questionSheet)
          dispatch(createQuestionSheet(questionSheet))
          navigation.navigate("Review question sheet")
        }}
        title="Continue"
      />
    </View>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    questions: state.questionReducer.questions,
  }
}

export default connect(mapStateToProps, { createQuestionSheet })(Form)

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  questionInput: {
    borderColor: "rgba(158, 150, 150, 0.5)",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
  },
})

// redux hooks example:
// const dispatch = useDispatch()
// const counter = useSelector(state => state.counter)

// <View>
//  <Text>Counter: {counter.counter}</Text>
//  <QSButton onPressFunction={() => dispatch({ type: "INCREMENT" })} title="Increment" />
//  <QSButton onPressFunction={() => dispatch({ type: "DECREMENT" })} title="Decrement" />
// </View>
