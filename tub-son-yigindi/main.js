let a = prompt(Number());

let j = 0;
for (let i = 0; i <= a; i++) {
    if (i % 2 === 1) {
        j += i;
    }
}
console.log(j);