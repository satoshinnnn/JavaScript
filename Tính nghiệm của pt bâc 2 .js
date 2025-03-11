let a = +prompt(`Enter a (ax^2 + bx + c = 0)`);
let b = +prompt("Enter b (ax^2 + bx + c = 0)");
let c = +prompt("Enter c (ax^2 + bx + c = 0)");
if (a!==0 && b^2-4*a*c>=0) {
    let x1 = (-b+Math.sqrt(b^2-4*a*c))/(2*a);
    let x2 = (-b-Math.sqrt(b^2-4*a*c))/(2*a);
    if (x1==x2){
        alert(`Quotion have 1 solution: x = ${x1}`);
    }
    else{
        alert(`Quottion have 2 solutions: x1 = ${x1}, x2 = ${x2}`);
    }
}
else{
    alert("equation with no solution");
}
