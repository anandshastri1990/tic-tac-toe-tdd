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