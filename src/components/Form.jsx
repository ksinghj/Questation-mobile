import React, { useState } from "react"
import { View, Text, StyleSheet, Button, TextInput } from "react-native"
import { connect, useSelector, useDispatch } from "react-redux"
import { createQuestionSheet, clickContinue } from "../state/actions"
import QSButton from "../components/QSButton"

// TODO:
// - still use hooks for question state but as 5 use useSelector
// const dispatch = useDispatch()
// const questions = useSelector(state => state.questionReducer.questions)

const Form = () => {
  // Form state
  const [question1, setQuestion1] = useState("")
  const [question2, setQuestion2] = useState("")
  const [question3, setQuestion3] = useState("")
  const [question4, setQuestion4] = useState("")
  const [question5, setQuestion5] = useState("")

  // TODO: submit questions as to reducer as one (like QS web)
  // example setQuestionSheet([question1, question2, ...])

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
      <QSButton title="Continue" />
    </View>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    goBackClicked: state.goBackClicked,
    questions: state.questionReducer.questions, // is needed?
  }
}

export default connect(mapStateToProps, { createQuestionSheet, clickContinue })(Form)

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
