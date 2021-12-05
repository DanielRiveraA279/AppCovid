import {createStore, combineReducers, applyMiddleware, compose} from  'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {covidReducer} from '../reducers/covidReducer';

//configuracion del store para utilizar redux-thunk

//aqui podemos armar para la exportación de varios reducers si es necesario
const reducers = combineReducers({
    covid: covidReducer,
});

//preparamos el store con redux-thunk
export const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk) //configurar para thunk - que proveera el manejo de metodos asincronos
    )
);
