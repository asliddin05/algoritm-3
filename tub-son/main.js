let son = prompt(Number());
let j = 0;
for (let i = 1; i <= son; i++) {
    if (son % i === 0) {
        j +=1;
        console.log(j);
    }
}
if (j === 2) {
    console.log("Tub son");
} else {
    console.log("Tub son emas");
}