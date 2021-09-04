import { SET_TRUE, SET_FALSE, ADD_CHARACTER, REMOVE_CHARACTER } from "./types"

export const setTrue = () => {
    return {
        type: SET_TRUE
    }
}

export const setFalse = () => {
    return {
        type: SET_FALSE
    }
}

export const addCharacter = (name, id) => {
    return {
        type: ADD_CHARACTER,
        payload: {
            name,
            id,
            strength: 5,
            dexterity: 7,
            constitution: 8,
        }
    }
}

export const removeCharacter = (id) => {
    return {
        type: REMOVE_CHARACTER,
        payload: {
            id
        }
    }
}
