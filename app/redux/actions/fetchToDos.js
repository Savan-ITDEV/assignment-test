import { FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, FETCHING_TODOS } from '../constants';

export function fetchToDos() {

    return (dispatch) => {
        dispatch(getTodos())

        return(fetch('https://api.myjson.com/bins/fz62x'))
        .then(res => res.json())
        .then(json => {

            return(dispatch(getToDosSuccess(json)))
        })
        .catch(err => dispatch(getToDosFailure(err)))
    }
}

function getToDos() {

    return {
        type: FETCHING_TODOS
    }
}

function getToDosSuccess(data) {

    return {
        type: FETCH_TODOS_SUCCESS,
        data
    }
}

function getToDosFailure() {
    return {
        type: FETCH_TODOS_FAILURE
    }
}