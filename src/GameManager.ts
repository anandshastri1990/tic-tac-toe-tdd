export function isWinningCombo(allBoxes): boolean {
    return (
        (allBoxes[0] !== null && allBoxes[0] === allBoxes[1] && allBoxes[0] === allBoxes[2])
        || (allBoxes[3] !== null && allBoxes[3] === allBoxes[4] && allBoxes[3] === allBoxes[5])
    );
}