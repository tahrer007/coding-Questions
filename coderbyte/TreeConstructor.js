function TreeConstructor(strArr) {
  let object = { test: 4 };


  for (let index = 0; index < strArr.length; index++) {
    let element = strArr[index];
    element = element.replace("(", "");
    element = element.replace(")", "");
    element = element.replace(",", "");
    const temp = element.split("");
    console.log(temp);
    for (let index = 0; index < temp.length; index++) {
        const int = temp[index];

        if (object.hasOwnProperty(int)) {
            index ? object[int].parent++ : object[int].child++;
          } else {
            object[int] = {
              parent: index ? 1 : 0,
              child: index ? 0 : 1,
            };
          }
          if(object[int].parent>2 || object[int].child>2) return false ; 
        
    }
    
    
  }

  
  return true;
}
console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));
