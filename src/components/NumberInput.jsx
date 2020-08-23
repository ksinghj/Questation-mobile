import React from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

const NumberInput = ({ onInput }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mb}>Enter number of sheets:</Text>
      <Text style={styles.mb}>*Leave blank to default to 10</Text>
      <TextInput onChangeText={e => onInput(e)} style={styles.input} />
    </View>
  )
}

export default NumberInput

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    borderColor: "rgba(158, 150, 150, 0.5)",
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    marginVertical: 10,
    width: 100,
  },
  mb: {
    marginBottom: 6,
  },
})
