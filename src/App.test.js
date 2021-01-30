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

    test('should default player1 and player2 name', () => {
        const component = shallow(<App/>);

        expect(component.find('#player1').prop('value')).toContain('Player 1');
        expect(component.find('#player2').prop('value')).toContain('Player 2');
    })

    test('should say player1\'s turn by default', () => {
        const component = shallow(<App/>);

        expect(component.find('#turn').text()).toContain('Player 1\'s turn');
    });

    test('should show the newly set player name when updated by player', () => {
        const component = shallow(<App/>);

        component.find('#player1').simulate('change', {target: {value: 'Custom name 1'}})

        expect(component.find('#turn').text()).toContain('Custom name 1\'s turn');
    });
})
