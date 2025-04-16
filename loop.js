/*
1
2
3
fazztrack
5
*/

for (let i = 1; i <= 5; i++) {
    if (i === 4) console.log('fazztrack')
    else console.log(i)
}

let iWhile = 1
while (iWhile <= 5) {
    if (iWhile === 4) console.log('fazztrack')
    else console.log(iWhile)
    iWhile++
}

let iDoWhile = 1
do {
    if (iDoWhile === 4) console.log('fazztrack')
    else console.log(iDoWhile)
    iDoWhile++
} while (iDoWhile <= 5);


/*

*****
****
***
**
*

*/

for (let i = 5; i >= 1; i--) {
    let starForLoop = ""
    for (let j = 0; j < i; j++) {
        starForLoop += "*"
    }
    console.log(starForLoop)
}

let xWhile = 5
while (xWhile >= 1) {
    let yWhile = 0
    let starWhileLoop = ""
    while (yWhile < xWhile) {
        starWhileLoop += "*"
        yWhile++
    }
    console.log(starWhileLoop)
    xWhile--
}

let xDoWhile = 5
do {
    let wDoWhile = 0
    let starDoWhileLoop = ""
    do {
        starDoWhileLoop += "*"
        wDoWhile++
    } while (wDoWhile < xDoWhile);
    console.log(starDoWhileLoop)
    xDoWhile--
} while (xDoWhile >= 1);

/*

*
**
***
****
*****

*/

for (let i = 1; i <= 5; i++) {
    let starForLoop = ""
    for (let j = 0; j < i; j++) {
        starForLoop += "*"
    }
    console.log(starForLoop)
}


let q = 1
while (q <= 5) {
    let w = 0
    let starWhileLoop = ""
    while (w < q) {
        starWhileLoop += "*"
        w++
    }
    console.log(starWhileLoop)
    q++
}

let qDoWhile = 1
do {
    let wDoWhile = 0
    let starDoWhileLoop = ""
    do {
        starDoWhileLoop += "*"
        wDoWhile++
    } while (wDoWhile < qDoWhile);
    console.log(starDoWhileLoop)
    qDoWhile++
} while (qDoWhile <= 5);
