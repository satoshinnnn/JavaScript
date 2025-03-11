let d1 = prompt("Enter the day 1 (YY-MM-DD)");
let d2 = prompt("Enter the day 2 (YY-MM-DD)");
let date1 = new Date(d1);
let date2 = new Date(d2);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
alert(`The diference betweent 2 day: ${diffDays} days or ${diffTime} milliseconds`);
