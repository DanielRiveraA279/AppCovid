import React from 'react';
import { shallow } from "enzyme";
import { Card } from '../../components/Card';

describe('Prueba en <Card />', () => {
    test('debe de mostrar la card correctamente', () => {
        const title = 'Confirmado';
        const value = 100;
        const color = 'red';

        const wrapper = shallow(<Card title={title}  value={value} color={color}/>)
        expect(wrapper).toMatchSnapshot();
    })
})