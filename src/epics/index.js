import { ofType, combineEpics } from 'redux-observable';
import { debounceTime, delay, mapTo, map, mergeMapTo } from 'rxjs/operators';
import { SET_TRUE, SET_FALSE, HANDLE_CHANGED_FRET_COUNT, SET_FRET_COUNT } from '../actions/types';
import { getFretsToSet } from '../selectors';
import { Store } from 'redux';

const epic1 = (action$, state$) => action$.pipe(
    ofType(SET_TRUE),
    delay(1000),
    mapTo({type: SET_FALSE})
)

const epic2 = (action$, state$) => action$.pipe(
    ofType(SET_FALSE),
    delay(1000),
    mapTo({type: SET_TRUE})
)

// const handleChangedFretCountEpic = (action$, state$) => action$.pipe(
//     ofType(HANDLE_CHANGED_FRET_COUNT),
//     debounceTime(250),
//     mapTo(
//         {
//             type: SET_FRET_COUNT,
//             payload: action$.fretCount
//         }
//     )
// )
 
export default combineEpics(epic1, epic2);

const inspectAction = (action$) => {
    console.log(action$)
    return action$.fretCount
}
