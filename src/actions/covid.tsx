import { types } from '../types/types';

//redux thunk
export const GetFichaDatos = (results: {}) => {
    return (dispatch: any) => {
        dispatch(SetFichaDatos(results))
    }
}

export const SetFichaDatos = (payload: any) => ({
    type: types.fichaDatos,
    payload: payload
    
});
