import React from 'react';
import { Provider } from 'react-redux';
import { Home } from './components/Home';
import { store } from './store/store';

//aqui Proveemos el store en la jerarquia mas alta de la aplicacion
export const App = () => {
  return (
    <Provider store={store}>
      <Home />
   </Provider>)
}
