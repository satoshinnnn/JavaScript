// Random a number in a specific range (stackoverflow)
let a = +prompt("Enter a number");
let b = +prompt("Enter a number");

// hàm random 1 số trong 1 khoảng 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (a>b) {
  document.write(getRandomInt(b, a));
}else{
  document.write(getRandomInt(a, b));
 }

