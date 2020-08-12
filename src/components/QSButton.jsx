import React from "react"
import { View, StyleSheet, Button } from "react-native"
import colors from "../constants/colors"

const QSButton = ({ onPressFunction, title }) => (
  <View style={styles.container}>
    <Button
      onPress={onPressFunction}
      title={title}
      style={styles.button}
      color={colors.qsRed}
    ></Button>
  </View>
)

export default QSButton

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
})
