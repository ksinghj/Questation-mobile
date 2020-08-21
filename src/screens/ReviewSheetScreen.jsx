import React from "react"
import { View, StyleSheet, Text, Button, ScrollView } from "react-native"
import QSButton from "../components/QSButton"
import Sheet from "../components/Sheet"
import { useSelector, connect } from "react-redux"
import fontSizes from "../constants/fontSizes"

const ReviewSheetScreen = () => {
  const questionSheet = useSelector(state => state.questionReducer.questions)
  console.log("rqs", questionSheet)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Does this look right?</Text>
        <Sheet data={questionSheet} isAnswers={false} />
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
  textHeader: {
    textAlign: "center",
    marginVertical: 5,
    fontSize: fontSizes.headerText,
  },
})
