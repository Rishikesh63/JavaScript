function maxSumIncreasingSubsequence(arr) {
    const n = arr.length;
    const dp = [...arr];

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i] < dp[j] + arr[i]) {
                dp[i] = dp[j] + arr[i];
            }
        }
    }

    return Math.max(...dp);
}

const n = 4;
const arr = [1, 3, 1, 100];

console.log(maxSumIncreasingSubsequence(arr)); 
