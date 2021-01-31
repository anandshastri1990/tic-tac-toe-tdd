import {GAME_STATUS, getGameStatus, getWinningCombo} from "./GameManager";

it('winning combo 1 - 1st row', function () {
    expect(getGameStatus(['X', 'X', 'X', 'O', 'O'])).toEqual(GAME_STATUS.WON);
});

it('winning combo 2 - 2nd row', function () {
    expect(getGameStatus([null, null, 'X', 'O', 'O', 'O', 'X', 'X', null])).toEqual(GAME_STATUS.WON);
});

it('winning combo 3 - 3nd row', function () {
    expect(getGameStatus([null, null, null, 'O', 'O', null, 'X', 'X', 'X'])).toEqual(GAME_STATUS.WON);
});

it('winning combo 4 - 1st column', function () {
    expect(getGameStatus(['X', null, 'O', 'X', 'O', null, 'X', null, null])).toEqual(GAME_STATUS.WON);
});

it('winning combo 5 - 2nd column', function () {
    expect(getGameStatus([null, 'X', null, 'O', 'X', 'O', null, 'X', null])).toEqual(GAME_STATUS.WON);
});

it('winning combo 6 - 3rd column', function () {
    expect(getGameStatus([null, 'X', 'O', null, 'X', 'O', 'X', null, 'O'])).toEqual(GAME_STATUS.WON);
});

it('winning combo 7 - diagonal left to right', function () {
    expect(getGameStatus(['O', 'X', 'X', null, 'O', 'X', null, null, 'O'])).toEqual(GAME_STATUS.WON);
});

it('winning combo 8 - diagonal right to left', function () {
    expect(getGameStatus(['O', 'O', 'X', null, 'X', null, 'X', null, null])).toEqual(GAME_STATUS.WON);
});

it('should return winning combo', function () {
    expect(getWinningCombo(['O', 'O', 'X', null, 'X', null, 'X', null, null])).toEqual([2,4,6]);
});

it('should return winning combo', function () {
    expect(getWinningCombo(['O', 'X', 'X', null, 'O', 'X', null, null, 'O'])).toEqual([0,4,8]);
});