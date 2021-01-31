export function getGameStatus(allBoxes): number {
    let gameWon = (
           (allBoxes[0] !== null && allBoxes[0] === allBoxes[1] && allBoxes[0] === allBoxes[2])
        || (allBoxes[3] !== null && allBoxes[3] === allBoxes[4] && allBoxes[3] === allBoxes[5])
        || (allBoxes[6] !== null && allBoxes[6] === allBoxes[7] && allBoxes[6] === allBoxes[8])
        || (allBoxes[0] !== null && allBoxes[0] === allBoxes[3] && allBoxes[0] === allBoxes[6])
        || (allBoxes[1] !== null && allBoxes[1] === allBoxes[4] && allBoxes[1] === allBoxes[7])
        || (allBoxes[2] !== null && allBoxes[2] === allBoxes[5] && allBoxes[2] === allBoxes[8])
        || (allBoxes[0] !== null && allBoxes[0] === allBoxes[4] && allBoxes[0] === allBoxes[8])
        || (allBoxes[2] !== null && allBoxes[2] === allBoxes[4] && allBoxes[2] === allBoxes[6])
    );

    if (gameWon) {
        return GAME_STATUS.WON;
    } else if (allBoxes.filter((box) => box === null).length === 0) {
        return GAME_STATUS.TIE;
    } else {
        return GAME_STATUS.IN_PROGRESS;
    }
}

export const GAME_STATUS = {
    IN_PROGRESS: 0, WON: 1, TIE: 2
}