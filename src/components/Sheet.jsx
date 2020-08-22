import React from "react"
import { Text, StyleSheet, View } from "react-native"
import font from "../constants/font"
import colors from "../constants/colors"

const Sheet = ({ data, sheetNumber, isAnswers }) => {
  let arrToMap = Object.values(data)
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>
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
    </View>
  )
}

export default Sheet

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: colors.sheet,
  },
  content: {
    margin: 30,
  },
  header: {
    fontSize: font.fontSizes.headerText,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  questions: {
    marginBottom: 50,
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
    fontSize: font.fontSizes.main,
  },
  question: {
    textAlign: "center",
    fontSize: font.fontSizes.main,
  },
})
