import React from "react"
import { Text, StyleSheet, View } from "react-native"
import fontSizes from "../constants/fontSizes"

const Sheet = ({ data, sheetNumber, isAnswers }) => {
  let arrToMap = Object.values(data)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {isAnswers ? "Answers" : "Sheet"} {sheetNumber}
      </Text>
      <View style={styles.questions}>
        {arrToMap.map((q, index) => {
          return (
            <View key={index + 1}>
              <View style={styles.line}>
                <Text style={styles.qNumber}>{index + 1}.</Text>
                <Text style={styles.question}>{q}</Text>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default Sheet

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  text: {
    fontSize: fontSizes.headerText,
    fontWeight: "bold",
    textAlign: "center",
  },
  line: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  qNumber: {
    textAlign: "left",
    marginRight: 20,
    fontSize: fontSizes.main,
  },
  question: {
    textAlign: "center",
    fontSize: fontSizes.main,
  },
})
