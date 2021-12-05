import React from 'react';
import { imagen } from '../helpers/covidImage';

interface Props {
    title: string;
    value: number;
    color: string;
}

export const Card = ({ title, value, color}: Props) => {

    return (
        <div className="card" style={{ width: '100%' }}>
            <img className="card-img-top"
                src={imagen(`./imgCovid.png`).default}
                alt="Card image" style={{ width: "100%" }} />
            <div className="card-body">
                <h4 className="card-title" style={{ fontSize: 30 }}>{title}</h4>
                <p className="card-text" style={{ fontWeight: 'bold', fontSize: 50, color: color }}>{value || 0}</p>
            </div>
        </div>)
}