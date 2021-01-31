import React from "react";
import {mount, shallow} from "enzyme";
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

    it('should default player1 and player2 name', () => {
        const component = shallow(<App/>);

        expect(component.find('#player1').prop('value')).toContain('Player 1');
        expect(component.find('#player2').prop('value')).toContain('Player 2');
    })

    it('should say player1\'s turn by default', () => {
        const component = shallow(<App/>);

        expect(component.find('#turn').text()).toContain('Player 1\'s turn');
    });

    it('should show the newly set player name when updated by player', () => {
        const component = shallow(<App/>);

        component.find('#player1').simulate('change', {target: {value: 'Custom name 1'}})

        expect(component.find('#turn').text()).toContain('Custom name 1\'s turn');
    });

    it('should show player 2\'s turn once player 1 selects a box', function () {
        const component = mount(<App/>);

        component.find('#game-board').find('#box-2').simulate('click');

        expect(component.find('#turn').text()).toContain('Player 2\'s turn');
    });

    it('should not switch player\'s turn when clicked on the same box twice', function () {
        const component = mount(<App/>);

        component.find('#game-board').find('#box-2').simulate('click');
        component.find('#game-board').find('#box-2').simulate('click');

        expect(component.find('#turn').text()).toContain('Player 2\'s turn');
    });
})

describe('Game board', () => {
    it('should contain a game board with 9 boxes in total', function () {
        const component = mount(<App/>);

        for (let i = 1; i <= 9; i++) {
            expect(component.find('#game-board').find('#box-' + i)).toHaveLength(1);
        }
    });

    it('should contain 3 rows with 3 boxes in each', function () {
        const component = mount(<App/>);

        for (let i = 1; i <= 3; i++) {
            expect(component.find('#game-board').find('#row-1').find('#box-' + i)).toHaveLength(1);
        }
        for (let i = 4; i <= 6; i++) {
            expect(component.find('#game-board').find('#row-2').find('#box-' + i)).toHaveLength(1);
        }
        for (let i = 7; i <= 9; i++) {
            expect(component.find('#game-board').find('#row-3').find('#box-' + i)).toHaveLength(1);
        }
    });

    it('should show X mark when player 1 selects first box', () => {
        const component = mount(<App/>);
        expect(component.find('#game-board').find('#box-1').text()).not.toEqual('X');

        component.find('#game-board').find('#box-1').simulate('click');

        expect(component.find('#game-board').find('#box-1').text()).toEqual('X');
    });

    it('should show O mark when player 2 selects first box', function () {
        const component = mount(<App/>);
        expect(component.find('#game-board').find('#box-2').text()).not.toEqual('X');

        component.find('#game-board').find('#box-1').simulate('click');
        component.find('#game-board').find('#box-2').simulate('click');

        expect(component.find('#game-board').find('#box-2').text()).toEqual('O');
    });

    it('should not switch player\'s token when clicked on the same box twice', function () {
        const component = mount(<App/>);

        component.find('#game-board').find('#box-1').simulate('click');
        component.find('#game-board').find('#box-1').simulate('click');

        expect(component.find('#game-board').find('#box-1').text()).toEqual('X');
    });

    it('should alternate between player\'s token when clicked on different boxes', function () {
        const component = mount(<App/>);

        for (let i = 1; i <= 9; i++) {
            component.find('#game-board').find('#box-' + i).simulate('click');
        }

        for (let i = 1; i <= 9; i++) {
            expect(component.find('#game-board').find('#box-' + i).text()).toEqual(i % 2 === 1 ?'X' : 'O');
        }
    });
});