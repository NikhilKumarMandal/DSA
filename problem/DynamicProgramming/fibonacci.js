
function fibonacci(n,memo = {}) {
    for (n in memo) return memo[n];
    if (n <= 0) return 0;

    memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
    return memo[n]
}

