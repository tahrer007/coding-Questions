//https://exercism.org/tracks/javascript/exercises/bowling
//bowling
const FRAMES = 3;
const PINS = 10;

function roll(pins) {
  const min = 0;
  const max = pins;
  const num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}

function frame() {
  //first throw
  let score1 = 10;
  //let score1 = roll(PINS);
  if (score === PINS) return { score1, score2: 0 };
  //2nd throw
  let score2 = 0;
  // let score2 = roll(PINS - score);
  if (score === PINS) return { score1, score2 };
  return { score1, score2 };
}
function score(framesScore) {
  let totalScore = 0;
  for (let i = 1; i <= FRAMES; i++) {
    totalScore += framesScore[i].total;
    console.log(framesScore[i].total);
  }
  return totalScore;
}
function game() {
  let framesCounter = 1;
  let spareIndex = [];
  let strikeIndex = new Array(FRAMES).fill(0);
  let framesScore = new Array(FRAMES + 1);
  do {
    let { score1, score2 } = frame();
    let sum = score1 + score2;
    framesScore[framesCounter] = {
      score1,
      score2,
      total: sum,
    };
    if (sum == PINS) {
      if (framesCounter !== FRAMES) {
        console.log(framesCounter);
        if (!score2) {strikeIndex[framesCounter] = framesCounter + 1 ;
            strikeIndex;                                                      
        } else spareIndex.push(framesCounter);
      } else {
        //TODO:Fill balls
        let temp = 0 ; 
        //if another strike or spare paly another round  
        
      }
      
    }
    if (spareIndex.includes(framesCounter - 1)) {
      let obj = framesScore[framesCounter - 1];
      obj.total += score1;
    }
    if (strikeIndex.includes(framesCounter)) {
      const index = strikeIndex.indexOf(framesCounter);
      let obj = framesScore[index];
      if (!score2) {
        obj.total += 10;

        if (obj.total === 30) strikeIndex[index] = 0;
        else strikeIndex[index] = framesCounter + 1;
      } else {
        obj.total += sum;
        strikeIndex[index] = 0;
      }
    }

    framesCounter++;
  } while (framesCounter <= FRAMES);

  return score(framesScore);
}

console.log(game());
