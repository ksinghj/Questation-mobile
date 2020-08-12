import React from "react"
import { View, Text, StyleSheet, Button, TextInput } from "react-native"
import { connect } from "react-redux"
import { createQuestionSheet, clickContinue } from "../state/actions"
import QSButton from "../components/QSButton"

const Form = () => (
  <View style={styles.container}>
    <Text>Form</Text>
    <TextInput />
    <QSButton title="Continue" />
  </View>
)

const mapStateToProps = state => {
  return {
    goBackClicked: state.goBackClicked,
    questions: state.questionReducer.questions,
  }
}

export default connect(mapStateToProps, { createQuestionSheet, clickContinue })(Form)

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
