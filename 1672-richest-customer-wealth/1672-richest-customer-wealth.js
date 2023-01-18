/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const wealthArr = accounts.map((el) => [el.reduce((acc, cur) => acc + cur, 0)]);
    return Math.max(...wealthArr);
};