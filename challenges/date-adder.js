function add(date, diff) {

  let answer;
  const operator = diff.slice(diff.length - 1);
  const numberDifference = Number(diff.slice(0, diff.length - 1));

  if(operator === 's') answer = new Date(date.setSeconds(date.getSeconds() + numberDifference));
  if(operator === 'm') answer = new Date(date.setMinutes(date.getMinutes() + numberDifference));
  if(operator === 'h') answer = new Date(date.setHours(date.getHours() + numberDifference));
  if(operator === 'd') answer = new Date(date.setDate(date.getDate() + numberDifference));
  if(operator === 'w') answer = new Date(date.setDate(date.getDate() + numberDifference * 7));
  if(operator === 'm') answer = new Date(date.setMonth(date.getMonth() + numberDifference));
  if(operator === 'y') answer = new Date(date.setFullYear(date.getFullYear() + numberDifference));




  return answer;
}


module.exports = add;