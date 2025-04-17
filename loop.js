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

console.log("-----(trriangle)-----")

const input = 5

/*

    *
   * *
  * * *
 * * * *
* * * * *

*/

for (let i = 1; i <= input; i++) {
    let margin = ""
    for (let m = input; m > i; m--) {
        margin += " "
    }
    let star = ""
    for (let s = 0; s < i; s++) {
        star += "* "
    }
    console.log(margin + star)
}

console.log("-----(using if)-----")

for (let i = 1; i <= input; i++) {
    // make loop 5 times in every parent loop
    let triangle = ""
    for (let j = input; j > 0; j--) {
        if (j > i) triangle += " "
        else triangle += "* "
    }

    // combine margin and star in the output
    console.log(triangle)
}

console.log("-----(rectangle)-----")

/*

* * * * *
*       *
*       *
*       *
* * * * *

*/

for (let i = input; i >= 1; i--) {
    let star = ""
    if (i === 5 || i === input - (input - 1)) {
        for (let j = input; j >= 1; j--) {
            star += "* "
        }
    } else {
        for (let j = input; j >= 1; j--) {
            if (j === input || j === input - (input - 1)) {
                star += "* "
            } else {
                star += "  "
            }
        }
    }

    console.log(star)
}

console.log("-----(sliced rec)-----")

/*

* * * *
* * *   *
* *   * *
*   * * *
  * * * *

*/

for (let i = 1; i <= input; i++) {
    let tri1 = ""
    for (let t = input; t > i; t--) {
        tri1 += "* "
    }
    let tri2 = ""
    for (let t = 1; t < i; t++) {
        tri2 += " *"
    }
    console.log(tri1 + " " + tri2)
}

console.log("-----(diagonal line)-----")

/*

        *
      *
    *
  *
*

*/

for (let i = 1; i <= input; i++) {
    let margin = ""
    for (let m = input; m > i; m--) {
        margin += "  "
    }
    let star = "*"
    console.log(margin + star)
}

//looping array

const studentData = [
    { nama: "John", score: 80 },
    { nama: "Arie", score: 99 },
    { nama: "Denis", score: 60 },
    { nama: "Jane", score: 85 },
    { nama: "Ed", score: 90 },
]

// nilai rata-rata

let average = 0
for (let i = 0; i < studentData.length; i++) {
    average += studentData[i].score
}

average = average / studentData.length
console.log("nilai rata-rata adalah " + average)

// siswa tertinggi

let high = {
    score: 0
}

for (let i = 0; i < studentData.length; i++) {
    if (studentData[i].score > high.score) {
        high = studentData[i]
    }
}


console.log("nilai tertinggi adalah " + high.score + " dengan siswa bernama " + high.nama)

// siswa terendah

let low = {
    score: 0
}

for (let i = 0; i < studentData.length; i++) {
    if (low.score === 0 || studentData[i].score < low.score) {
        low = studentData[i]
    }
}


console.log("nilai tertinggi adalah " + low.score + " dengan siswa bernama " + low.nama)