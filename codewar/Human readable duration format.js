function formatDuration(seconds) {
  const arr = [
    { time: "year", total: 365 * 24 * 60 * 60 },
    { time: "day", total: 24 * 60 * 60 },
    { time: "hour", total: 60 * 60 },
    { time: "minute", total: 60 },
    { time: "second", total: 1 },
  ];
  if (!seconds) return "now";
  let answerArr = [];
  let index = 0;
  do {
    let count = Math.floor(seconds / arr[index].total);
    let remain = seconds % arr[index].total;
    seconds = remain;
    if (count)
      answerArr.push({
        count,
        name: arr[index].time,
      });

    index++;
  } while (seconds);

  if (answerArr.length === 1)
    return `${answerArr[0].count} ${answerArr[0].name}${
      answerArr[0].count > 1 ? "s" : ""
    }`;
  let result = "";
  for (let i = 0; i < answerArr.length; i++) {
    //name + count 
    result += `${answerArr[i].count} ${answerArr[i].name}`;
    //singular or pluralr 
    if (answerArr[i].count > 1) result += "s";
    //coma , and or nothing 
    if (i !== answerArr.length - 1 && i !== answerArr.length - 2) {
      result += ", ";
    } else if (i === answerArr.length - 2) {
      result += " and ";
    }
  }

  return result;
}

console.log(formatDuration(3662));
