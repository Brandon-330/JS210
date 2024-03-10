function formattedMonth(monthIdx) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[monthIdx];
}

function formattedDay(dayIdx) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[dayIdx];
}

function formattedDate(dateObj) {
  let month = formattedMonth(dateObj.getMonth());
  let date = formattedDay(dateObj.getDay());
  let suffix = dateSuffix(dateObj.getDate());

  return `The date is ${date}, ${month} the ${dateObj.getDate()}${suffix}`;
}

function dateSuffix(dayOfMonth) {
  if ((dayOfMonth % 20) === 1) {
    return 'st';
  } else if ((dayOfMonth % 20) === 2) {
    return 'nd';
  } else if ((dayOfMonth % 20) === 3) {
    return 'rd';
  } else if (dayOfMonth === 31) {
    return 'st'
  } else {
    return 'th';
  }
}

let today = new Date();
console.log(today);

console.log(today.toDateString());

console.log(formattedDate(today));