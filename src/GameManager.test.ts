import {isWinningCombo} from "./GameManager";

it('winning combo 1 - 1st row', function () {
    expect(isWinningCombo(['X', 'X', 'X', 'O', 'O'])).toEqual(true);
});

it('winning combo 2 - 2nd row', function () {
    expect(isWinningCombo([null, null, 'X', 'O', 'O', 'O', 'X', 'X', null])).toEqual(true);
});

it('winning combo 3 - 3nd row', function () {
    expect(isWinningCombo([null, null, null, 'O', 'O', null, 'X', 'X', 'X'])).toEqual(true);
});

it('winning combo 4 - 1st column', function () {
    expect(isWinningCombo(['X', null, 'O', 'X', 'O', null, 'X', null, null])).toEqual(true);
});

it('winning combo 5 - 2nd column', function () {
    expect(isWinningCombo([null, 'X', null, 'O', 'X', 'O', null, 'X', null])).toEqual(true);
});

it('winning combo 6 - 3rd column', function () {
    expect(isWinningCombo([null, 'X', 'O', null, 'X', 'O', 'X', null, 'O'])).toEqual(true);
});

it('winning combo 7 - diagonal left to right', function () {
    expect(isWinningCombo(['O', 'X', 'X', null, 'O', 'X', null, null, 'O'])).toEqual(true);
});

it('winning combo 8 - diagonal right to left', function () {
    expect(isWinningCombo(['O', 'O', 'X', null, 'X', null, 'X', null, null])).toEqual(true);
});