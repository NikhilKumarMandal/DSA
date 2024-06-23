

function maxCoinsSum(amount, nums, memo = {}) {
    if (amount in memo) return memo[amount]
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    let maxCoins = -Infinity

    for (const num of nums) {
        res = maxCoinsSum(amount - num, nums, memo)
        if (res !== -1) {
            maxCoins = Math.max(maxCoins,res + 1)
        }
    }

    memo[amount] = (maxCoins === -Infinity) ? -1 : maxCoins
    return memo[amount]
}

const amount = 10;
const coins = [7, 7, 5];
console.log(maxCoinsSum(amount, coins));