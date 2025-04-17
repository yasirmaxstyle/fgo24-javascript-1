# Make Shapes Using Loop

## Triangle


```
    *
   * *
  * * *
 * * * *
* * * * *
```

### We can make it using iteration like follow

```c
const input = 5

for (let i = 1; i <= input; i++) {
    // make margin using <space> so the upper parts are indented 
    let margin = ""
    for (let m = input; m > i; m--) {
        margin += " "
    }

    // draw the star
    let star = ""
    for (let s = 0; s < i; s++) {
        star += "* "
    }

    // combine margin and star in the output
    console.log(margin + star)
}
```
### Alternatively, we can use some kind of comparison as the initial value of parent loop might be compared with its children.

```c
for (let i = 1; i <= input; i++) {
    // make loop 5 times in every parent loop
    let triangle = ""
    for (let j = input; j > 0; j--) {
        // but here there are different condition
        if (j > i) triangle += " "
        else triangle += "* "
    }

    // output the triangle
    console.log(triangle)
}
```
### The first condition occurs like when we make margin iteration in the first example, let's compare them
-
```c

for (let m = input; m > i; m--)

if (j > i) triangle += " "

```
### As long as initial value bigger than its parents (i), it will run this condition, so does the second condition run otherwise
