export function getGameStatus(allBoxes) {
    if (getWinningCombo(allBoxes)) {
        return GAME_STATUS.WON;
    } else if (allBoxes.filter((box) => box === null).length === 0) {
        return GAME_STATUS.TIE;
    } else {
        return GAME_STATUS.IN_PROGRESS;
    }
}

export function getWinningCombo(allBoxes) {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (allBoxes[a] !== null && allBoxes[a] === allBoxes[b] && allBoxes[a] === allBoxes[c]) {
            return [a,b,c];
        }
    }

    return null;
}

export const GAME_STATUS = {
    IN_PROGRESS: 0, WON: 1, TIE: 2
}

export const PLAYER1_TOKEN = 'X';
export const PLAYER2_TOKEN = 'O';