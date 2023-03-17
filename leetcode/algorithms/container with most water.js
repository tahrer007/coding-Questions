//11. Container With Most Water

var maxArea = function (height) {
  let maxArea = 0;
  let maxY = 0 ;

  for (let i = height.length - 1; i >= 1; i--) {
    if(maxY >= height[i])continue
    for (let j = i - 1; j >= 0; j--) {
      let x= i - j;
      let y = Math.min(height[i],height[j]); 
      let temp = x * y;
      if (temp > maxArea){
         maxArea = temp
         maxY=y;
        
        };
    }
  }

  return maxArea;
};

console.log(maxArea([1,2]));
