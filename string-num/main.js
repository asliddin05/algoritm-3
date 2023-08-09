let a = prompt("Istalgan so'zingizni kiriting");

let resultNum = 0;
let resultStr = "";

for(let i = 0; i < a.length; i++){
    let sum = Number(a[i]);
    if(sum || sum === 0){
        resultNum += Number(a[i]);
    } else {
        resultStr += String(a[i]);
    }
}
console.log(resultNum);
console.log(resultStr);