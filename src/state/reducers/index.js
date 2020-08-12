import { combineReducers } from "redux"
// import mathjs

const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_QUESTION":
      return { ...state, questions: action.payload }
    default:
      return state
  }
}

const goBackClicked = (state = false, action) => {
  switch (action.type) {
    case "GO_BACK":
      return (state = true)
    case "CONTINUE":
      return (state = false)
    default:
      return state
  }
}

const studentsReducer = (state = 0, action) => {
  switch (action.type) {
    case "ENTER_STUDENTS":
      return (state = action.payload)
    default:
      return state
  }
}

const classReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_A_CLASS":
      return (state = action.payload)
    default:
      return state
  }
}

const answersReducer = (state = [], action) => {
  switch (action.type) {
    case "ANSWERS":
      return (state = action.payload)
    default:
      return state
  }
}

// const initialState = {
//   counter: 0,
// }

// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: state.counter + 1 }
//     case "DECREMENT":
//       return { counter: state.counter - 1 }
//     default:
//       return state
//   }
// }

export default combineReducers({
  questionReducer,
  goBackClicked,
  studentsReducer,
  classReducer,
  answersReducer,
})
