/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [-50,-10,-3,10,0,100,-1500]
 
 const  minMoves2 = function(nums) {
    let moves = 0 ;
    function sortNumber(a,b) {
        return a - b;
     }
     const arr = nums.sort(sortNumber);
     arr
    const median = arr => {
        let middle = Math.floor(arr.length / 2);
        return arr.length % 2 !== 0 ? arr[middle] : (arr[middle - 1] + arr[middle]) / 2;
      };
      console.log(arr)
    const mid =median(arr) ;
    console.log(mid)
    nums.forEach((num=>{
        moves+= Math.abs(num - mid)
    }))
    return moves ; 
};

console.log(minMoves2(nums))

