const t = 46;
const coins = [25, 10, 5, 2, 1];

function amountToCoins(t, coins) {
    const dp = [];
    for (const coin of coins) {
        while (t >= coin) {
            dp.push(coin);
            t -= coin;
        }
    }
    return dp;
}

console.log(amountToCoins( t, coins));
