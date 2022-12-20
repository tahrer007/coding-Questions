//https://exercism.org/tracks/javascript/exercises/bowling

//bowling
const FRAMES = 10;
const PINS = 10;
const STRIKE = "X";
const SPARE = "/";
const NOTPLAYED = "-";

function roll(pins) {
  const min = 0;
  const max = pins;
  const num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}
const fillBalls = () => {
  let score = roll(PINS);
  if (score === PINS) return 2 * PINS + roll(PINS);
  return PINS + score;
};
function frame() {
   let firstThrow = roll(PINS);

  if (firstThrow === PINS)
    return { firstThrow: STRIKE, secondThrow: NOTPLAYED };

  let secondThrow = roll(PINS - firstThrow);

  if (secondThrow + firstThrow === PINS)
    return { firstThrow, secondThrow: SPARE };
  return { firstThrow, secondThrow };
}
function tenthFrame() {
  let firstThrow = roll(PINS);
  if (firstThrow === PINS)
    return { firstThrow: STRIKE, secondThrow: NOTPLAYED, total: fillBalls() };
  let secondThrow = roll(PINS - firstThrow);
  if (secondThrow + firstThrow === PINS)
    return { firstThrow, secondThrow: SPARE, total: fillBalls() };
  return { firstThrow, secondThrow, total: firstThrow + secondThrow };
}

function score(gameScore) {
  let totalScore = 0;
  console.log(gameScore);
  for (let i = 1; i <= FRAMES; i++) {
    totalScore += gameScore[i].total;
  }
  return totalScore;
}
function updateSpare(i, gameScore) {
  if (i > 1 && gameScore[i - 1]?.secondThrow === SPARE) {
    const { firstThrow, secondThrow } = gameScore[i];
    switch (i) {
      case FRAMES:
        gameScore[i - 1].total =
          Number.isInteger(firstThrow) && Number.isInteger(secondThrow)
            ? PINS + firstThrow
            : 2 * PINS;
        break;

      default:
        gameScore[i - 1].total =
          firstThrow === STRIKE ? 2 * PINS : PINS + firstThrow;
        break;
    }
  }
}
function updateStrike(i, gameScore) {
  const { firstThrow, secondThrow } = gameScore[i];
  if (i > 1 && gameScore[i - 1]?.firstThrow === STRIKE) {
    let prev = gameScore[i - 1].total;
    switch (i) {
      case FRAMES:
        gameScore[i - 1].total = prev + gameScore[i].total;
        break;

      default:
        if (Number.isInteger(firstThrow) && Number.isInteger(secondThrow)) {
          gameScore[i - 1].total = prev + firstThrow + secondThrow;
        } else if (secondThrow === SPARE) gameScore[i - 1].total = 2 * PINS;
        else {
          gameScore[i - 1].total = 2 * PINS;
        }
        break;
    }
  }
  //chek after two striks in row
  if (
    i > 2 &&
    gameScore[i - 1]?.firstThrow === STRIKE &&
    gameScore[i - 2]?.firstThrow === STRIKE
  ) {
    gameScore[i - 2].total =
      firstThrow === STRIKE ? 3 * PINS : 2 * PINS + firstThrow;
  }
}

function game() {
  const gameScore = [];
  let framNum = 1;

  for (let i = framNum; i <= FRAMES; i++) {
    let result;
    //add frame throw results
    switch (i) {
      case FRAMES:
        result = tenthFrame();
        gameScore[i] = result;
        break;

      default:
        result = frame();
        const { firstThrow, secondThrow } = result;
        if (firstThrow === STRIKE || secondThrow === SPARE)
          gameScore[i] = { i, firstThrow, secondThrow, total: PINS };
        else
          gameScore[i] = {
            i,
            firstThrow,
            secondThrow,
            total: firstThrow + secondThrow,
          };
        break;
    }

    //add strick or spare bonous
    updateSpare(i, gameScore);
    updateStrike(i, gameScore);
  }

  return score(gameScore);
}

console.log(game());
