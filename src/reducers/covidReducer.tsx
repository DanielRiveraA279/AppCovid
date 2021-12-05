
import { types } from '../types/types';

const initialState = {
    cases: [],
    history: [],
    vaccines: [],
    country: {},
}

export const covidReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.fichaDatos:
            return {
                fichaDatos: action.payload
            }
        default:
            return state
    }
}