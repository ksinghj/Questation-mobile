import {
  CREATE_QUESTION,
  GO_BACK,
  CONTINUE,
  ENTER_STUDENTS,
  CREATE_A_CLASS,
  CHANGE_SCREEN,
} from "./types"

export const createQuestionSheet = inputs => {
  return {
    type: CREATE_QUESTION,
    payload: inputs,
  }
}

export const clickGoBack = () => {
  return {
    type: GO_BACK,
  }
}

export const clickContinue = () => {
  return {
    type: CONTINUE,
  }
}

export const enterStudents = students => {
  return {
    type: ENTER_STUDENTS,
    payload: students,
  }
}

export const createAClass = questions => {
  return {
    type: CREATE_A_CLASS,
    payload: questions,
  }
}

export const answers = evaldArr => {
  return {
    type: "ANSWERS",
    payload: evaldArr,
  }
}

export const changeScreen = screen => {
  return {
    type: "CHANGE_SCREEN",
    payload: screen,
  }
}
