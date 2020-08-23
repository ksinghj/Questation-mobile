import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { View, StyleSheet, Text, Button, ScrollView } from "react-native"
import QSButton from "../components/QSButton"
import Sheet from "../components/Sheet"
import NumberInput from "../components/NumberInput"
import { useSelector, connect } from "react-redux"
import font from "../constants/font"
import colors from "../constants/colors"

const ReviewSheetScreen = () => {
  const navigation = useNavigation()
  const [numberOfSheets, setNumberOfSheets] = useState("")

  const questionSheet = useSelector(state => state.questionReducer.questions)
  // console.log("rqs", questionSheet)

  const sheetsHandler = sheets => {
    // only integers allowed ?
    // setNumberOfSheets(sheets.replace(/[^0-9]/g, ""))
    setNumberOfSheets(sheets)
    console.log("no. of sheets: ", numberOfSheets)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Does this look right?</Text>
        <Sheet data={questionSheet} isAnswers={false} />
      </View>
      <NumberInput onInput={sheetsHandler} />
      <QSButton
        onPressFunction={() => navigation.navigate("Class sheets")}
        title={"Generate sheets for class"}
      />
    </ScrollView>
  )
}

export default connect(mapStateToProps, {})(ReviewSheetScreen)

const mapStateToProps = state => {
  return {
    questions: state.questionReducer.questions,
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.background,
  },
  textHeader: {
    textAlign: "center",
    marginVertical: 15,
    fontSize: font.fontSizes.headerText,
  },
})
