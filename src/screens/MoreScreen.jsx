import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const MoreScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button onPress={() => navigation.navigate("Start")} title="Go Back"></Button>
    <Text>MoreScreen</Text>
  </View>
)

export default MoreScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
