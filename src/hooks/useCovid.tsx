import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetFichaDatos } from '../actions/covid';
import { Cases, History, Vaccines } from '../interfaces/covidInterface';
import covidDB from '../services/covidDB';

export const useCovid = () => {
    
    const dispatch = useDispatch();

    const getInfoCovid = async (continent: string, country: string) => {
        
        //armado de varios get en constantes - con sus respectivas interfaces
        const casesPromise = covidDB.get<Cases>(`/cases?continent=${continent}&country=${country || ''}`);
        const historyromise = covidDB.get<History>(`/history?continent=${continent}&status=deaths&country=${country || ''}`);
        const vaccinesPromise = covidDB.get<Vaccines>(`/vaccines?continent=${continent}&country=${country || ''}`);
        const countryPromise = covidDB.get<Cases>(`/cases?continent=${continent}`);

        // realizamos multiples ataques a la api al mimso tiempo
        const response = await Promise.all([
            casesPromise,
            historyromise,
            vaccinesPromise,
            countryPromise
        ]);
        
        //despatachamos por redux-thunk los datos filtrados por country seleccionados en caso que no llegue todavia el country se selecciona por defecto el primer registro del array
        dispatch(GetFichaDatos({
            cases: Object.values(response[0].data).find(res => res.All.country === country) || Object.values(response[0].data)[0] ,
            history: Object.values(response[1].data).find(res => res.All.country === country) || Object.values(response[1].data)[0],
            vaccines: Object.values(response[2].data).find(res => res.All.country === country) || Object.values(response[2].data)[0],
            country: Object.values(response[3])[0]
        }));
    }

    useEffect(() => {
        //traemos por defecto una vez, los datos de argentina
         getInfoCovid('South America', 'Argentina')
    }, []);

    return {
        //retornamos la funcion asincrona
        getInfoCovid,
    }
}