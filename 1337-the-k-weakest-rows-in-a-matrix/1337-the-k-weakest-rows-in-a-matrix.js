/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */


var kWeakestRows = function (mat, k) {
    return mat
        .map((el, i) => [i, el.reduce((acc,cur) => acc + cur, 0)])
        // map based on indexed row and count eg. [0: 2, 1:3]
        .sort((a, b) => (a[1] == b[1] ? a[0]-b[0] : a[1] - b[1]))
        // need to understand sort and how it works, sort by count
        .map((row)=> row[0])
        // to get row index only
        .slice(0,k);
        // to get index up till k only


};
