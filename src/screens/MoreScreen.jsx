import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import QSButton from "../components/QSButton"

const MoreScreen = ({ navigation }) => (
  <View style={styles.container}>
    <QSButton onPressFunction={() => navigation.navigate("Start")} title="Go Back" />
    <Text>MoreScreen</Text>
  </View>
)

export default MoreScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
