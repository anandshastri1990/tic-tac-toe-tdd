import {shallow} from "enzyme";
import React from "react";
import {GameBoard} from "./GameBoard";

describe('Game board', () => {
    it('should contain a game board with 9 boxes in total', function () {
        const component = shallow(<GameBoard gameBoard={[]}/>);

        for (let i = 1; i <= 9; i++) {
            expect(component.find('#game-board').find('#box-' + i)).toHaveLength(1);
        }
    });

    it('should contain 3 rows with 3 boxes in each', function () {
        const component = shallow(<GameBoard gameBoard={[]}/>);

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

    it('should show passed in data on game board', function () {
        const component = shallow(<GameBoard gameBoard={['X', 'O', null, 'O', 'X', null, 'X', 'O', 'X']}/>);

        expect(component.find('#game-board').find('#box-1').text()).toContain('X');
        expect(component.find('#game-board').find('#box-2').text()).toContain('O');
        expect(component.find('#game-board').find('#box-3').text()).toContain("");
        expect(component.find('#game-board').find('#box-4').text()).toContain('O');
        expect(component.find('#game-board').find('#box-5').text()).toContain('X');
        expect(component.find('#game-board').find('#box-6').text()).toContain("");
        expect(component.find('#game-board').find('#box-7').text()).toContain('X');
        expect(component.find('#game-board').find('#box-8').text()).toContain('O');
        expect(component.find('#game-board').find('#box-9').text()).toContain('X');
    });

    it('should highlight given boxes', function () {
        const component = shallow(<GameBoard
            gameBoard={['X', 'O', null, 'O', 'X', null, 'X', 'O', 'X']}
            winningCombo={[0,4,8]}/>);

        expect(component.find('#game-board').find('#box-1').get(0).props.className).toEqual('box highlight');
        expect(component.find('#game-board').find('#box-2').get(0).props.className).toEqual('box');
        expect(component.find('#game-board').find('#box-3').get(0).props.className).toEqual('box');
        expect(component.find('#game-board').find('#box-4').get(0).props.className).toEqual('box');
        expect(component.find('#game-board').find('#box-5').get(0).props.className).toEqual('box highlight');
        expect(component.find('#game-board').find('#box-6').get(0).props.className).toEqual('box');
        expect(component.find('#game-board').find('#box-7').get(0).props.className).toEqual('box');
        expect(component.find('#game-board').find('#box-8').get(0).props.className).toEqual('box');
        expect(component.find('#game-board').find('#box-9').get(0).props.className).toEqual('box highlight');
    });
});
