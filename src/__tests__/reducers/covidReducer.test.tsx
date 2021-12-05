import { covidReducer } from "../../reducers/covidReducer";
import { types } from "../../types/types";

describe('Pruebase en el Reducer', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = covidReducer({
            cases: [],
            history: [],
            vaccines: [],
            country: {},
        }, {});

        expect(state).toEqual({
            cases: [],
            history: [],
            vaccines: [],
            country: {},
        });
    });
});


