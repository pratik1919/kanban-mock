import dispatcher from "./../dispatcher/dispatcher";
import actionTypes from "./actionType";
import defaultTask from "../data/data";

export function getTask() {
    dispatcher.dispatch({
        type: actionTypes.GET_TASK,
        tasks: defaultTask,
    });
}

export function createTask(newTaskObj) {
    dispatcher.dispatch({
        type: actionTypes.CREATE_TASK,
        newTaskObj
    });
}

export function updateStatus(updateObj) {
    dispatcher.dispatch({
        type: actionTypes.UPDATE_STATUS,
        updateObj
    });
}

export function searchList(query) {
    dispatcher.dispatch({
        type: actionTypes.SEARCH_TASK,
        query
    });
}