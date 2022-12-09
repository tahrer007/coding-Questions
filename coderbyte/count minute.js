/***************************************************************************************
 *                                                                                      *
 *                  CODERBYTE BEGINNER CHALLENGE                                        *
 *                                                                                      *
 *  Counting Minutes I                                                                  *
 *  Using the JavaScript language, have the function CountingMinutesI(str) take the     *
 *  str parameter being passed which will be two times (each properly formatted with    *
 *  a colon and am or pm) separated by a hyphen and return the total number of minutes  *
 *  between the two times. The time will be in a 12 hour clock format. For example:     *
 *  if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am     *
 *  the output should be 1320.                                                          *
 ***************************************************************************************/

str1 = "9:00am-10:00am";
str2 = "9:23pm-11:10pm";
str3 = "11:23pm-00:50am";
str4 = "9:20am-9:43pm";
str5 = "11:00pm-1:00am";

function CountingMinutesI(str) {
  const timeArr = str.split("-");
  const day1 = "07 08 1991 ";
  let day2 = "";

  const ampm1 = timeArr[0].slice(-2);
  const ampm2 = timeArr[1].slice(-2);

   if (ampm1 === "pm" && ampm2 === "am") day2 = "07 09 1991 "
   else day2=day1 ; 

  let from = ` ${day1}${timeArr[0].slice(0, -2)} ${ampm1}`;
  let to = ` ${day2}${timeArr[1].slice(0, -2)} ${ampm2}`;
  
  let date1 = new Date(from);
  let date2 = new Date(to);
return (date2 - date1) / 60000;
}

console.log(CountingMinutesI(str1)); //60
console.log(CountingMinutesI(str2));//107
console.log(CountingMinutesI(str3));//87
console.log(CountingMinutesI(str4));//743
console.log(CountingMinutesI(str5));//120

