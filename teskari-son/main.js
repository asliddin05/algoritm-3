let n = prompt(Number());
let reverseNum = 0;
while (n !== 0) {
    let temp = n % 10;
    reverseNum = reverseNum * 10 + temp;
    n = Math.floor(n / 10);
}
console.log(reverseNum);
