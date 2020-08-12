import React from "react"
import { View, StyleSheet, Text, Button, ScrollView } from "react-native"
import QSButton from "../components/QSButton"

const ReviewSheetScreen = () => (
  <ScrollView style={styles.container}>
    <View style={styles.container}>
      <Text>ReviewSheetScreen</Text>
    </View>
  </ScrollView>
)

export default ReviewSheetScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
