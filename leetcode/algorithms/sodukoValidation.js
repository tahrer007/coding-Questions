//36. Valid Sudoku

var isValidSudoku = function (board) {
  const NINE = 9;
  const DOTE = ".";

  const rows = [];
  const cols = [];
  const subBox = [];

  for (let i = 0; i < NINE; i++) {
    rows.push([]);
    cols.push([]);
    subBox.push([]);
  }

  const subBoxNum = (i, j) => {

    
    if (i < 3) {
      if (j < 3) return 0;
      else if (j < 6) return 1;
      return 2;
    } else if (i < 6) {
      if (j < 3) return 3;
      else if (j < 6) return 4;
      return 5;
    }
    if (j < 3) return 6;
    else if (j < 6) return 7;
    return 8;
  };

  for (let i = 0; i < NINE; i++) {
    for (let j = 0; j < NINE; j++) {
      let num = board[i][j];
      if (num === DOTE) continue;
      if (
        rows[i].includes(num) ||
        cols[j].includes(num) ||
        subBox[subBoxNum(i, j)].includes(num)
      ) return false;
      
      rows[i].push(num);
      cols[j].push(num);
    subBox[subBoxNum(i, j)].push(num);
    }
  }

  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board));
