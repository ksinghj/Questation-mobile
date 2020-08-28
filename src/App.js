import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
// import { StatusBar } from "expo-status-bar"
import * as React from "react"
import { StyleSheet, TouchableWithoutFeedback, ScrollView } from "react-native"
import StartScreen from "./screens/StartScreen"

import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducers from "./state/reducers"
import { Provider } from "react-redux"
import QuestionCreateScreen from "./screens/QuestionCreateScreen"
import MoreScreen from "./screens/MoreScreen"
import ReviewSheetScreen from "./screens/ReviewSheetScreen"
import QuestionSheets from "./screens/QuestionSheets"
import AnswersScreen from "./screens/AnswersScreen"

// const store = createStore(reducers)
const store = createStore(
  reducers,
  // redux dev tools
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(thunk))
)

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="More" component={MoreScreen} />
          <Stack.Screen name="Create your questions" component={QuestionCreateScreen} />
          <Stack.Screen name="Review question sheet" component={ReviewSheetScreen} />
          <Stack.Screen name="Class sheets" component={QuestionSheets} />
          <Stack.Screen name="Answers" component={AnswersScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
})
