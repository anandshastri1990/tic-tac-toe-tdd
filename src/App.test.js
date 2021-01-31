import React from "react";
import {mount, shallow} from "enzyme";
import App from "./App";
import {PLAYER1_TOKEN, PLAYER2_TOKEN} from "./GameManager";
import {GameBoard} from "./GameBoard";

it('should contain application header Tic Tac Toe', () => {
    const component = shallow(<App/>);

    expect(component.find('#header').text()).toEqual('Tic Tac Toe');
});

describe('Player name', () => {
    it('should not switch player\'s turn when clicked on the same box twice', function () {
        const component = mount(<App/>);

        selectBoxes(component, [2, 2])

        expect(component.find('#turn').text()).toContain('Player 2\'s turn');
    });

    it('should not show player\'s turn info once a player wins the game', function () {
        const component = mount(<App/>);

        expect(component.find('#winner')).toHaveLength(0);

        selectBoxes(component, [4, 1, 5, 2, 7, 3]);

        expect(component.find('#turn')).toHaveLength(0);
    });

    it('should show player 1 turn when game is reset', () => {
        const component = mount(<App/>);

        selectBoxes(component, [2]);

        component.find('#restart-wrapper').simulate('click');

        expect(component.find('#turn').text()).toContain('Player 1\'s turn');
    });
})

describe('Game board', () => {
    it('should show X mark when player 1 selects first box', () => {
        const component = mount(<App/>);
        expect(component.find('#game-board').find('#box-1').text()).not.toEqual(PLAYER1_TOKEN);

        selectBoxes(component, [1]);

        expect(component.find('#game-board').find('#box-1').text()).toEqual(PLAYER1_TOKEN);
    });

    it('should show O mark when player 2 selects first box', function () {
        const component = mount(<App/>);
        expect(component.find('#game-board').find('#box-2').text()).not.toEqual(PLAYER1_TOKEN);

        selectBoxes(component, [1, 2]);

        expect(component.find('#game-board').find('#box-2').text()).toEqual(PLAYER2_TOKEN);
    });

    it('should not switch player\'s token when clicked on the same box twice', function () {
        const component = mount(<App/>);

        selectBoxes(component, [1, 1])

        expect(component.find('#game-board').find('#box-1').text()).toEqual(PLAYER1_TOKEN);
    });

    it('should alternate between player\'s token when clicked on different boxes', function () {
        const component = mount(<App/>);

        selectBoxes(component, [2,1,4,3,5,6,7,8,9]);

        expect(component.find('#game-board').find('#box-1').text()).toEqual(PLAYER2_TOKEN);
        expect(component.find('#game-board').find('#box-2').text()).toEqual(PLAYER1_TOKEN);
        expect(component.find('#game-board').find('#box-3').text()).toEqual(PLAYER2_TOKEN);
        expect(component.find('#game-board').find('#box-4').text()).toEqual(PLAYER1_TOKEN);
        expect(component.find('#game-board').find('#box-5').text()).toEqual(PLAYER1_TOKEN);
        expect(component.find('#game-board').find('#box-6').text()).toEqual(PLAYER2_TOKEN);
        expect(component.find('#game-board').find('#box-7').text()).toEqual(PLAYER1_TOKEN);
        expect(component.find('#game-board').find('#box-8').text()).toEqual(PLAYER2_TOKEN);
        expect(component.find('#game-board').find('#box-9').text()).toEqual(PLAYER1_TOKEN);
    });
});

describe('Restart Game', () => {
    it('should contain restart game button', function () {
        const component = shallow(<App/>);

        expect(component.find('#restart').text()).toEqual('Restart game');
    });

    it('should contain a restart icon', function () {
        const component = shallow(<App/>);

        expect(component.find('#restart-icon')).toHaveLength(1);
    });

    it('should reset all boxes when clicked on restart game button', () => {
        const component = mount(<App/>);

        selectBoxes(component, [2, 1, 4, 8, 5, 6, 7, 3, 9]);

        component.find('#restart-wrapper').simulate('click');

        for (let i = 1; i <= 9; i++) {
            expect(component.find('#box-' + i).text()).toEqual('');
        }
    });

    it('should not show game winner when game is reset', () => {
        const component = mount(<App/>);

        selectBoxes(component, [1, 3, 5, 6, 9]);

        expect(component.find('#winner')).toHaveLength(1);

        component.find('#restart-wrapper').simulate('click');

        expect(component.find('#winner')).toHaveLength(0);
    });
});

describe('Undo a move', () => {
    it('should contain undo a move button', function () {
        const component = shallow(<App/>);

        expect(component.find('#undo').text()).toEqual('Undo a move');
    });

    it('should contain a undo icon', function () {
        const component = shallow(<App/>);

        expect(component.find('#undo-icon')).toHaveLength(1);
    });

    it('should undo player\'s selection on clicking undo', function () {
        const component = mount(<App/>);

        selectBoxes(component, [1, 4, 2]);

        component.find('#undo-wrapper').simulate('click');

        expect(component.find('#box-1').text()).toEqual('X');
        expect(component.find('#box-4').text()).toEqual('O');
        expect(component.find('#box-2').text()).toEqual('');
    });

    it('should undo player\'s turn on clicking undo', function () {
        const component = mount(<App/>);

        selectBoxes(component, [1, 4, 2]);

        expect(component.find('#turn').text()).toContain('Player 2\'s turn');

        component.find('#undo-wrapper').simulate('click');

        expect(component.find('#turn').text()).toContain('Player 1\'s turn');
    });

    it('should undo player\'s selection twice when clicked on undo twice', function () {
        const component = mount(<App/>);

        selectBoxes(component, [1, 4, 2]);

        component.find('#undo-wrapper').simulate('click');
        component.find('#undo-wrapper').simulate('click');

        expect(component.find('#box-1').text()).toEqual('X');
        expect(component.find('#box-4').text()).toEqual('');
        expect(component.find('#box-2').text()).toEqual('');
    });

    it('should reset to blank state when undo is clicked after first move', function () {
        const component = mount(<App/>);

        selectBoxes(component, [1]);

        expect(component.find('#turn').text()).toContain('Player 2\'s turn');

        component.find('#undo-wrapper').simulate('click');

        expect(component.find('#turn').text()).toContain('Player 1\'s turn');
        expect(component.find('#box-1').text()).toEqual('');
    });

    it('should ignore undo a move when clicked before any box selection', function () {
        const component = mount(<App/>);

        component.find('#undo-wrapper').simulate('click');

        expect(component.find('#box-1').text()).toEqual('');
    });

    it('should undo player\'s turn info when undo is clicked after game is won', function () {
        const component = mount(<App/>);

        selectBoxes(component, [1, 3, 5, 6, 9]);

        expect(component.find('#turn')).toHaveLength(0);
        expect(component.find('#winner')).toHaveLength(1);

        component.find('#undo-wrapper').simulate('click');

        expect(component.find('#turn').text()).toContain('Player 1\'s turn');
        expect(component.find('#winner')).toHaveLength(0);
    });

    it('should undo player\'s turn info when undo is clicked after game is tied', function () {
        const component = mount(<App/>);

        selectBoxes(component, [2, 1, 4, 8, 5, 6, 7, 3, 9]);

        expect(component.find('#turn')).toHaveLength(0);
        expect(component.find('#tie')).toHaveLength(1);

        component.find('#undo-wrapper').simulate('click');

        expect(component.find('#turn').text()).toContain('Player 1\'s turn');
        expect(component.find('#tie')).toHaveLength(0);
    });
});

describe('Game play', () => {
    it('should show winner as Player 1 when player 1 selects 3 boxes in first row', function () {
        const component = mount(<App/>);

        expect(component.find('#winner')).toHaveLength(0);

        selectBoxes(component, [1, 4, 2, 5, 3]);

        expect(component.find('#winner').text().trim()).toEqual('Player 1 won!')
    });

    it('should show winner as Player 2 when player 2 selects 3 boxes in second row', () => {
        const component = mount(<App/>);

        expect(component.find('#winner')).toHaveLength(0);

        selectBoxes(component, [1, 4, 7, 5, 3, 6]);

        expect(component.find('#winner').text().trim()).toEqual('Player 2 won!')
    });

    it('should show winner as Player 2 when player 2 selects 3 boxes in first row', function () {
        const component = mount(<App/>);

        expect(component.find('#winner')).toHaveLength(0);

        selectBoxes(component, [4, 1, 5, 2, 7, 3]);

        expect(component.find('#winner').text().trim()).toEqual('Player 2 won!')
    });

    it('should show game is tie message when all boxes are selected', function () {
        const component = mount(<App/>);

        expect(component.find('#winner')).toHaveLength(0);

        selectBoxes(component, [2,1,4,8,5,6,7,3,9]);

        expect(component.find('#tie').text().trim()).toEqual('It\'s a tie!')
    });

    it('should not allow selection of box once game is won by a player', function () {
        const component = mount(<App/>);

        selectBoxes(component, [4, 1, 5, 2, 7, 3]);

        selectBoxes(component, [8]);

        expect(component.find('#game-board').find('#box-8').text()).toEqual('');
    });

    it('should highlight winning boxes', function () {
        const component = mount(<App/>);

        selectBoxes(component, [4, 1, 5, 2, 7, 3]);

        expect(component.find('#game-board').find('#box-1').get(0).props.className).toEqual('box highlight-red');
        expect(component.find('#game-board').find('#box-2').get(0).props.className).toEqual('box highlight-red');
        expect(component.find('#game-board').find('#box-3').get(0).props.className).toEqual('box highlight-red');
        expect(component.find('#game-board').find('#box-4').get(0).props.className).toEqual('box');
        expect(component.find('#game-board').find('#box-5').get(0).props.className).toEqual('box');
        expect(component.find('#game-board').find('#box-6').get(0).props.className).toEqual('box');
        expect(component.find('#game-board').find('#box-7').get(0).props.className).toEqual('box');
        expect(component.find('#game-board').find('#box-8').get(0).props.className).toEqual('box');
        expect(component.find('#game-board').find('#box-9').get(0).props.className).toEqual('box');
    });
})

let selectBoxes = (component, selectionArray) => {
    selectionArray.forEach((selection) => {
        component.find('#box-' + selection).simulate('click');
    });
}