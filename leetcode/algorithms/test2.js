//a. Given time in a 24-hour format,
// find the acute angle (in degrees) between the hour hand and
// the minute hand if the same time is represented on a wall clock.
//Write the solution in javascript

const angle = (hour, minutes) => {
  // make it 12 formate hours
  let modifiedHour = hour > 12 ? hour - 12 : hour;
  const MIN = 60;
  const PART = 5;
  const hourInMin = modifiedHour === 12 ? 0 : PART * modifiedHour;
  const shortHandLocation = (minutes / MIN) * PART + hourInMin;
  const theAngle = Math.abs(minutes - shortHandLocation) * 60;
  return 360 - theAngle <= theAngle ? 360 - theAngle : theAngle;
};

const format25 = (hour, minutes) => {
  // make it 12 formate hours
  let modifiedHour = hour > 12 ? hour - 12 : hour;
  const MIN = 65;
  const PART = 6;
  const hourInMin = modifiedHour === 12 ? 0 : PART * modifiedHour;
  const shortHandLocation = (minutes / MIN) * PART + hourInMin;
  const theAngle = Math.abs(minutes - shortHandLocation) * 60;
  return 360 - theAngle <= theAngle ? 360 - theAngle : theAngle;
};

const format225 = (hour, minutes) => {
  // make it 12 format hours
  let modifiedHour = hour > 12 ? hour - 12 : hour;
  const MIN = 65; // number of minutes in 1/6th of a day (25 hours)
  const PART = 6; // number of degrees moved by hour hand in 1 hour
  const hourInMin = modifiedHour === 12 ? 0 : PART * modifiedHour; // calculate hour hand position in minutes
  const shortHandLocation = (minutes / MIN) * PART + hourInMin; // calculate hour hand position in degrees
  const theAngle = Math.abs(minutes - shortHandLocation) * 60; // calculate angle between hour hand and minute hand in degrees
  return 360 - theAngle <= theAngle ? 360 - theAngle : theAngle; // return acute angle between hour hand and minute hand
};

console.log(angle(3, 15));
console.log(format25(3, 15));
//console.log(angle(15,15)) ;
