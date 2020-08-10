import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Textarea = props => (
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
)

export default Textarea

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
