import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native"

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
    fontSize: 16,
  },
})
