import React from "react"
import { connect } from "react-redux"
import { Text, StyleSheet, View } from "react-native"
import font from "../constants/font"
import colors from "../constants/colors"

const QuestionSheets = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Class Sheets</Text>
      <Text style={styles.header}>{props.students}</Text>
    </View>
  )
}

export default connect(mapStateToProps, {})(QuestionSheets)

const mapStateToProps = state => {
  return {
    students: state.studentsReducer, // number not in store prehaps ?
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
})
