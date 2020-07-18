const multiline = "line1\
line2";

console.log(multiline);

const multiline1 = "line1\n\
line2";

console.log(multiline1);

const multiline2 = `line1
line2`;

console.log(multiline2);

let currentTemp = 19.5;

const multiline3 = 'Current temperature:\n' +
    `\t${currentTemp}\u00b0C\n` +
    "Don't worry... the heat is on!";

console.log(multiline3);