import { useNavigation } from "@react-navigation/native"
import React, { useRef } from "react"
import { useSelector } from "react-redux"
import { View, StyleSheet, FlatList } from "react-native"
import QSButton from "../components/QSButton"
import Sheet from "../components/Sheet"
import colors from "../constants/colors"

const AnswersScreen = () => {
  const navigation = useNavigation()
  const answers = useSelector(state => state.answersReducer)

  let studentsNumberAsArr = new Array(answers)

  const renderSheet = () => {
    return answers.map((q, index) => {
      return <Sheet data={q} sheetNumber={index + 1} isAnswers={true} />
    })
  }

  const scrollTopRef = useRef(null)

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.sheetList}
        data={studentsNumberAsArr}
        renderItem={renderSheet}
        ref={scrollTopRef}
        // keyExtractor={item => item.answer} // TODO: list console warnings
      />
      <View style={styles.buttons}>
        <QSButton
          style={{ marginHorizontal: 50, marginTop: 10 }}
          onPressFunction={() => {
            scrollTopRef.current.scrollToOffset({ offset: 0, animated: true })
          }}
          title={"Scroll to top"}
        />
        <QSButton
          style={{ marginHorizontal: 50, marginTop: 10 }}
          onPressFunction={() => navigation.navigate("Class sheets")}
          title={"Questions"}
        />
      </View>
    </View>
  )
}

export default AnswersScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.background,
  },
  sheetList: {
    height: "93.5%",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 60,
  },
})
