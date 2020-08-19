import React from "react"
import { View, StyleSheet, Text, Button, ScrollView } from "react-native"
// import QSButton from "../components/QSButton"
import { useSelector, connect } from "react-redux"

const ReviewSheetScreen = () => {
  const questionSheet = useSelector(state => state.questionReducer.questions)
  console.log("rqs", questionSheet)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text>ReviewSheetScreen</Text>
        <Text>Q1:</Text>
      </View>
    </ScrollView>
  )
}

export default connect(mapStateToProps, {})(ReviewSheetScreen)

const mapStateToProps = state => {
  return {
    questions: state.questionReducer.questions,
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
