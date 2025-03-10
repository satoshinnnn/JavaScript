// Random a number in a specific range (công thức của W3School ở module JS Random)
let a = +prompt("Enter a number");
let b = +prompt("Enter a number");

// hàm random 1 số trong 1 khoảng 
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

if (a>b) {
  document.write(getRndInteger(b, a));
}else{
  document.write(getRndInteger(a, b));
 }

