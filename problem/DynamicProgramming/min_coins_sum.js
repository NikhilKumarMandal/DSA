
function minCoinsSun(amount, nums, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;
    if (amount < 0) return -1;

    let minSize = Infinity;

    for (const num of nums) {
        const res = minCoinsSun(amount - num, nums, memo);
        if (res !== -1) {
            minSize = Math.min(minSize, res + 1);
        }
    }

    memo[amount] = (minSize === Infinity) ? -1 : minSize;

    return memo[amount];
}

const amount = 10;
const coins = [7, 2, 7];
console.log(minCoinsSun(amount,coins));


