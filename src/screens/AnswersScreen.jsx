import { useNavigation } from "@react-navigation/native"
import React, { useState, useEffect } from "react"
import { useSelector, connect, useDispatch } from "react-redux"
import { View, StyleSheet, Text, Button, ScrollView } from "react-native"
import QSButton from "../components/QSButton"
import Textarea from "../components/Textarea"
// import font from "../constants/font"
import colors from "../constants/colors"

const AnswersScreen = props => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Textarea texts={["Answers?"]} />
    </View>
  )
}

export default AnswersScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.background,
  },
})
