//70. Climbing Stairs
var climbStairs = function(n, cache = {}) {
    if(n <= 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    if(cache[n]) return cache[n]; // Check if result is already cached
    
    const result = climbStairs(n-1, cache) + climbStairs(n-2, cache);
    cache[n] = result; // Cache the result for future use
    return result;
};

console.log(climbStairs(1))
console.log(climbStairs(5))
console.log(climbStairs(41))