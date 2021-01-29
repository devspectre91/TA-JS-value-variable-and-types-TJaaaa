//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

let i = 1;
while (i < 11) {
    console.log(i);
    i = i + 1;
}
// Using `console.log` log all the even values from 1 to 10.
let i = 1;
while (i < 11) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i = i + 1;
}

// Using `console.log` log all the od values from 1 to 10.
let i = 1;
while (i < 11) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i = i + 1;
}

// Calculate the sum of all numbers from 1 to 10.
let i = 1, sum = 0;
while (i < 11) {
    sum = sum + i;

    i = i + 1;
}
console.log(sum);

// Log all the values from 1 to 10 using while loop
let i = 1;
while (i < 11) {
    console.log(i);
    i = i + 1;
}