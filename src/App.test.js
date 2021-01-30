import React from "react";
import {shallow} from "enzyme";
import App from "./App";

it('should contain application header Tic Tac Toe', () => {
    const component = shallow(<App/>);

    expect(component.find('#header').text()).toEqual('Tic Tac Toe');
});

describe('Player name', () => {
    it('should accept player 1 name', () => {
        const component = shallow(<App/>);

        component.find('#player1').simulate('change', {target: {value: 'Custom name 1'}})

        expect(component.find('#player1').prop('value')).toContain('Custom name 1');
    });

    it('should accept player 2 name', () => {
        const component = shallow(<App/>);

        component.find('#player2').simulate('change', {target: {value: 'Custom name 2'}})

        expect(component.find('#player2').prop('value')).toContain('Custom name 2');
    });
})
