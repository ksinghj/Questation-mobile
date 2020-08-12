import React from "react"
import { View, StyleSheet, Image, Button, ScrollView } from "react-native"
import QSButton from "../components/QSButton"

const ReviewSheetScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <View style={styles.container}>
      <View>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/questation-logo.png")} style={styles.logo} />
        </View>
        <View style={styles.buttons}>
          <QSButton
            onPressFunction={() => navigation.navigate("Create your questions")}
            title="Start"
          />
          <QSButton onPressFunction={() => navigation.navigate("More")} title="More" />
        </View>
      </View>
    </View>
  </ScrollView>
)

export default ReviewSheetScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
