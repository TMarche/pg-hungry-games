import {Map} from "immutable";

import { SET_TRUE, SET_FALSE } from "../actions/types";

const INITIAL_STATE = Map({
    truthiness: null,
})

const gameReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_TRUE:
            return state.set("truthiness", "true")
        case SET_FALSE:
            return state.set("truthiness", "false")
        default:
            return state;
    }
}

export default gameReducer;