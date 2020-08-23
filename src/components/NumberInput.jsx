import React from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import Textarea from "../components/Textarea"

const NumberInput = ({ onInput }) => {
  return (
    <View style={styles.container}>
      <Textarea texts={["Enter number of students in your class:"]} />
      <TextInput onChangeText={e => onInput(e)} style={styles.input} />
    </View>
  )
}

export default NumberInput

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "rgba(158, 150, 150, 0.5)",
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    marginVertical: 10,
    marginBottom: 10,
    width: 100,
  },
})
