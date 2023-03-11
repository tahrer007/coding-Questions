//6. Zigzag Conversion

const convert = function (s, numRows) {
  if (s.length === 1) return s;
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push("");
  }
  rows;

  let currentRow = 0;
  let goingDown = false;

  for (const c of s) {
    rows[currentRow] += c;

    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
};
//PINALSIGYAHRPI
console.log(convert("PAYPALISHIRING", 4));
