// Pair-Programmed with TJ Jung
const wordSearch = (letters, word) => { 
    if (!letters.length) {
        return "Your matrix is empty!";
    };

    const horizontalJoin = letters.map(ls => ls.join(''));
    let verticalJoin = [];

    for (let col = 0; col < letters[0].length; col++) {
        verticalJoin.push([]);
    };

    for (let row = 0; row < letters.length; row++) {
        for (let col = 0; col < letters[row].length; col++) {
            verticalJoin[col].push(letters[row][col]);
        }
    };

    verticalJoin = verticalJoin.map(ls => ls.join(''));

    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    };

    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true
        }
    };
    
    return false;
};

module.exports = wordSearch;