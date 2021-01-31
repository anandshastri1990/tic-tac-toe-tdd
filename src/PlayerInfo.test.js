import {shallow} from "enzyme";
import React from "react";
import {PlayerInfo} from "./PlayerInfo";

describe('Player name', () => {
    it('should accept player 1 name', () => {
        const component = shallow(<PlayerInfo/>);

        component.find('#player1').simulate('change', {target: {value: 'Custom name 1'}})

        expect(component.find('#player1').prop('value')).toContain('Custom name 1');
    });

    it('should accept player 2 name', () => {
        const component = shallow(<PlayerInfo/>);

        component.find('#player2').simulate('change', {target: {value: 'Custom name 2'}})

        expect(component.find('#player2').prop('value')).toContain('Custom name 2');
    });

    it('should default player1 and player2 name', () => {
        const component = shallow(<PlayerInfo/>);

        expect(component.find('#player1').prop('value')).toContain('Player 1');
        expect(component.find('#player2').prop('value')).toContain('Player 2');
    })

    it('should say player1\'s turn', () => {
        const component = shallow(<PlayerInfo player1Turn={true}/>);

        expect(component.find('#turn').text()).toContain('Player 1\'s turn');
    });

    it('should show the newly set player name when updated by player', () => {
        const component = shallow(<PlayerInfo player1Turn={true}/>);

        component.find('#player1').simulate('change', {target: {value: 'Custom name 1'}})

        expect(component.find('#turn').text()).toContain('Custom name 1\'s turn');
    });

    it('should show player 2\'s turn when player1Turn is false', function () {
        const component = shallow(<PlayerInfo player1Turn={false}/>);

        expect(component.find('#turn').text()).toContain('Player 2\'s turn');
    });

})
