import React from "react"
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native"
import font from "../constants/font"

const QuestionInputs = props => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      {props.texts.map(text => {
        return (
          <View style={styles.block}>
            <Text style={styles.text} key={text}>
              {text}
            </Text>
          </View>
        )
      })}
    </View>
  </TouchableWithoutFeedback>
)

export default QuestionInputs

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  block: {
    marginVertical: 10,
  },
  text: {
    textAlign: "center",
    fontSize: font.fontSizes.main,
  },
})
