import React from "react"
import { View, Text, StyleSheet } from "react-native"
import font from "../constants/font"

const Textarea = props => (
  <View style={styles.container}>
    {props.texts.map(text => {
      return (
        <View style={styles.block} key={text}>
          <Text style={styles.text}>{text}</Text>
        </View>
      )
    })}
  </View>
)

export default Textarea

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  block: {
    marginVertical: 5,
  },
  text: {
    textAlign: "center",
    fontSize: font.fontSizes.headerText,
  },
})
