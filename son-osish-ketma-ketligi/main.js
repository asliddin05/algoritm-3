let son = +prompt("Iltimos, faqat 3 xonali son kiriting");

if(son >= 1000){
    console.log("Iltimos, faqat 3 xonali son kiriting")
} else if(son[0] === son[1] && son[0] === son[2]){
    console.log(Number(son));
} else if(son[0] < son[1] && son[0] < son[2]){
    console.log(son[1],son[2],son[0]);
} else if(son[0] < son[1] && son[0] < son[2] && son[1] > son[2]){
    console.log(son[0],son[2],son[1]);
} else if(son[0] > son[1] && son[0] > son[2] && son[1] > son[2] && son[1] > son[2]){
    console.log(son[2],son[1],son[0]);
} else if(son[0] > son[1] && son[0] > son[2] && son[1] < son[2]){
    console.log(son[1],son[2],son[0]);
} else if(son[0] > son[1] && son[0] < son[2] && son[1] < son[2] && son[1] < son[0]){
    console.log(son[1],son[0],son[2]);
} else if(son[0] < son[1] && son[0] > son[2] && son[1] > son[2] && son[1] > son[0]){
    console.log(son[2],son[0],son[1]);
}

// ustoz buni errinmasdan qilib chiqqan edim, lekin biitasi komputerimga tegingan edi(ismini aytmayman), osha buzib qoyin shu ahvolga tushirib qoyibdi, ancha mehnating singan edi😢