/*Have the function CorrectPath(str) read the str parameter being passed,
 which will represent the movements made in a 5x5 grid of cells starting from the top left position.
  The characters in the input string will be entirely composed of: r, l, u, d, ?. 
  Each of the characters stand for the direction to take within the grid, for example: r = right, l = left, u = up, d = down. Your goal is to determine what characters the question marks should be in order for a path to be created to go from the top left of the grid all the way to the bottom right without touching previously travelled on cells in the grid. 
For example: if str is "r?d?drdd" then your program should output the final correct string that will allow a path to be formed from the top left of a 5x5 grid to the bottom right. For this input, your program should therefore return the string rrdrdrdd. There will only ever be one correct path and there will always be at least one question mark within the input string. 
Sample Test Cases:
Input:"???rrurdr?"
Output:dddrrurdrd
Input:"drdr??rrddd?"
Output:drdruurrdddd
*/
//array[i][j] left(i-1) right(i+1) up(j+1) down(j-1)
const N = 5;
const USED = 1;
const EMPTY = 0;
function isLegal(index) {
  return index >= 0 && index < N;
}
const charsArr = ["r", "l", "u", "d"];
const dircetions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function correctPathBackTracking(row, col, maze, str, sol) {
  str;
  if (maze[row][col] === USED) return ""; //aleady used
  if (row === N - 1 && col === N - 1) return "";
  if (!str) return "";

  maze[row][col] = USED;

  const char = charsArr.includes(str[0]);

  if (char) {
    const index = charsArr.indexOf(str[0]);

    return (
      str[0] +
      correctPathBackTracking(
        row + dircetions[index][0],
        col + dircetions[index][1], //TODO:IS LEGAL
        maze,
        str.slice(1)
      )
    );
  } else {
    for (let i = 0; i < dircetions.length; i++) {
      if (
        isLegal(row + dircetions[i][0]) &&
        isLegal(col + dircetions[i][1]) &&
        correctPathBackTracking(
          row + dircetions[i][0],
          col + dircetions[i][1],
          maze,
          str.slice(1)
        )
      ) {
        // return sol += charsArr[i];

        return (
          charsArr[i] +
          correctPathBackTracking(
            row + dircetions[i][0],
            col + dircetions[i][1],
            maze,
            str.slice(1)
          )
        );
      }
    }
  }

  maze[row][col] = EMPTY;
  return "";
}

function CorrectPath(str) {
  const maze = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  str;
  let sol;
  const test = correctPathBackTracking(0, 0, maze, str, sol);
  console.log(test);
  return test;
}
console.log(CorrectPath("???????"));
