import {OrderedMap} from "immutable";

import { SET_TRUE, SET_FALSE, ADD_CHARACTER, REMOVE_CHARACTER } from "../actions/types";

const INITIAL_STATE = OrderedMap({
    truthiness: null,
    characters: OrderedMap(),
})

const gameReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_TRUE:
            return state.set("truthiness", "true")
        case SET_FALSE:
            return state.set("truthiness", "false")
        case ADD_CHARACTER:
            return state.setIn(["characters", action.payload.id], action.payload)
        case REMOVE_CHARACTER:
            return state.removeIn(["characters", action.payload.id])
        default:
            return state;
    }
}

export default gameReducer;