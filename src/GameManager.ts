export function isWinningCombo(allBoxes): boolean {
    return (
        (allBoxes[0] !== null && allBoxes[0] === allBoxes[1] && allBoxes[0] === allBoxes[2])
        || (allBoxes[3] !== null && allBoxes[3] === allBoxes[4] && allBoxes[3] === allBoxes[5])
        || (allBoxes[6] !== null && allBoxes[6] === allBoxes[7] && allBoxes[6] === allBoxes[8])
        || (allBoxes[0] !== null && allBoxes[0] === allBoxes[3] && allBoxes[0] === allBoxes[6])
        || (allBoxes[1] !== null && allBoxes[1] === allBoxes[4] && allBoxes[1] === allBoxes[7])
        || (allBoxes[2] !== null && allBoxes[2] === allBoxes[5] && allBoxes[2] === allBoxes[8])
    );
}