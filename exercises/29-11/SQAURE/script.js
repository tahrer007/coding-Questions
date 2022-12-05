const table = document.getElementById("mytable");
const LENGTH = 10;

for (let i = 0; i < LENGTH; i++) {
  let row = document.createElement("tr");
  for (let j = 1; j <= LENGTH; j++) {
    let cell = document.createElement("td");
    let num = i * LENGTH + j;
    console.log(num);
    cell.innerText = num;
    row.appendChild(cell);
  }
  table.appendChild(row);
}
