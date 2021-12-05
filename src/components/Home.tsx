import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCovid } from '../hooks/useCovid';
import { Card } from './Card';
import { imagen } from '../helpers/covidImage';

export const Home = () => {
    //funcion para multiples ataques a la api al mismo tiempo y manejo de redux-thunk
    const { getInfoCovid } = useCovid();

    //capturadores de values en los select continent y country
    const [textContinent, setTextContinent] = useState('South America');
    const [textCountry, setTextCountry] = useState('Argentina');

    //traemos la data de redux
    //@ts-ignore
    const { fichaDatos } = useSelector(state => state.covid);
    const history: any = [];

    if (fichaDatos) {
        Object.entries(fichaDatos.history?.All?.dates).map(([key, value]) => (key && value) && history.push(`${key}: ${value}`))
    }

    const handleContinent = (continent: string) => {
        setTextContinent(continent);
        setTextCountry('Seleccione un Pais');
    }

    const handleCountry = (country: string) => {
        setTextCountry(country);
    }

    useEffect(() => {
        //ejecucion de multiples llamadas pasando como argumento el continent y country, cada vez que cambien los valores de los hooks
        getInfoCovid(textContinent, textCountry);
    }, [textContinent, textCountry])

    return (
        <>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Matriz</a>
                    </div>

                </div>

            </nav>
            <div className="container-fluid">
                <div className="jumbotron">
                    <h1>Resumen de Casos</h1>
                    <p>La enfermedad por coronavirus (COVID‑19) es una enfermedad infecciosa provocada por el virus SARS-CoV-2.</p>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4" style={{ height: 40 }}>
                        {/*DropDown - Continente*/}
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" style={{ width: '100%' }}>{textContinent}
                                <span className="caret"></span></button>
                            <ul className="dropdown-menu" style={{ width: '100%' }}>
                                <li onClick={() => handleContinent('Europe')}><a href="#">Europe</a></li>
                                <li onClick={() => handleContinent('Asia')}><a href="#">Asia</a></li>
                                <li onClick={() => handleContinent('North America')}><a href="#">North America</a></li>
                                <li onClick={() => handleContinent('South America')}><a href="#">South America</a></li>
                                <li onClick={() => handleContinent('Oceania')}><a href="#">Oceania</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-sm-4" style={{ height: 40 }}>
                         {/*DropDown - Paises segun Continente*/}
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" style={{ width: '100%' }}>{textCountry}
                                <span className="caret"></span></button>
                            <ul className="dropdown-menu" style={{ width: '100%' }}>
                                {fichaDatos && Object.keys(fichaDatos.country)?.map((res, key) => <li onClick={() => handleCountry(res)}><a href="#">{res}</a></li>)}
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="row" style={{ marginTop: 10, marginBottom: 10 }}>
                    <div className="col-12 col-sm-4 ">
                        <Card title="Casos Confirmados" value={(fichaDatos && textCountry !== 'Seleccione un Pais') ? fichaDatos.cases?.All.confirmed : 0} color="red" />
                    </div>
                    <div className="col-12 col-sm-4 ">
                        <Card title="Recuperados" value={(fichaDatos && textCountry !== 'Seleccione un Pais') ? fichaDatos.cases?.All.recovered : 0} color="blue" />
                    </div>
                    <div className="col-12 col-sm-4 ">

                        <div className="card" style={{ width: '100%' }}>
                            <img className="card-img-top" src={imagen(`./imgCovid.png`).default} alt="Card image" style={{ width: "100%" }} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ fontSize: 30 }}>Datos Historicos</h4>
                                <div style={{ overflow: 'scroll', height: 90 }}>
                                    {(fichaDatos && textCountry !== 'Seleccione un Pais') && Object.values(history).map((item: any) => <p className="card-text" style={{ fontWeight: 'bold', fontSize: 18, color: 'red' }}>{item}</p>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 ">
                        <Card title="Vacunas Disponibles" value={(fichaDatos && textCountry !== 'Seleccione un Pais') ? fichaDatos.vaccines?.All.administered : 0} color="green" />
                    </div>
                    <div className="col-12 col-sm-4 ">
                        <Card title="Personas Vacunadas" value={(fichaDatos && textCountry !== 'Seleccione un Pais') ? fichaDatos.vaccines?.All.people_vaccinated : 0} color="purple" />
                    </div>
                    <div className="col-12 col-sm-4 ">
                        <Card title="Parcialmente Vacunadas" value={(fichaDatos && textCountry !== 'Seleccione un Pais') ? fichaDatos.vaccines?.All.people_partially_vaccinated : 0} color="orange" />
                    </div>

                    <div className="col-12 col-sm-4 ">
                        <Card title="Porcentaje Población" value={(fichaDatos && textCountry !== 'Seleccione un Pais') ? fichaDatos.vaccines?.All.life_expectancy.toString().concat('%') : 0} color="orange" />
                    </div>

                </div>
            </div>
        </>
    )
}