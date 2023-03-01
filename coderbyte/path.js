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
const N = 5;
const USED = 1;
const EMPTY = 0;
const dirChars = ["r", "l", "u", "d"];
const dirIdx = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const isLegal = (index) => index >= 0 && index < N;

function recurstionCorrectPath(row, col, maze, str, sol) {
  row;
  col;
  if (row === N - 1 && col === N - 1) return true;
  if (maze[row][col]) return false;
  if (!str) return false;

  maze[row][col] = 1;

  if (dirChars.includes(str[0])) {
    const [x, y] = dirIdx[dirChars.indexOf(str[0])];
    if (
      isLegal(row + x) &&
      isLegal(col + y) &&
      recurstionCorrectPath(row + x, col + y, maze, str.slice(1), sol)
    ) {
      sol.push(str[0]);
      return true;
    }
  } else {
    for (let i = 0; i < 4; i++) {
      const [x, y] = dirIdx[i];
      if (
        isLegal(row + x) &&
        isLegal(col + y) &&
        recurstionCorrectPath(row + x, col + y, maze, str.slice(1), sol)
      ) {

        console.log("before", sol);
        sol.push(dirChars[i]);
        console.log("?", sol);
        return true;
      }
    }
  }
  maze[row][col] = 0;
  return false;
}
function CorrectPath(str1) {
  const maze = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  str1;
  const str = str1.split("");
  str;
  const sol = [];
  console.log(dirChars.includes(str1[0]));

  recurstionCorrectPath(0, 0, maze, str, sol);
  maze;
  sol;
  return sol.join("");
}

console.log(CorrectPath("???rrurdr?"));