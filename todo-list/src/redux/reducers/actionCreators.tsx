import { Dispatch } from "redux"
import { ADD, CHANGE, DELETE } from "../actions"

export const changeTask = (id: number) => {
  return (dispatch: Dispatch) => {
    return dispatch({type: CHANGE, id})
  } 
}

export const addTask = (description: string) => {
  return (dispatch: Dispatch) => {
    return dispatch({type: ADD, description})
  } 
}

export const deleteTask = (id: number) => {
  return (dispatch: Dispatch) => {
    return dispatch({type: DELETE, id})
  } 
}
