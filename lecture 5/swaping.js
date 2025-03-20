var a = parseInt(prompt(`enter the first number :-`));
var b = parseInt(prompt(`enter the second number :-`));
var c;

document.write(`<h2>before swaping : ${a}</h2>`);
document.write(`<h2>before swaping : ${b}</h2>`);

c = a;
a = b;
b = c;

document.write(`<h2>after swaping : ${a}</h2>`);
document.write(`<h2>after swaping : ${b}</h2>`);

a = a + b;
b = a - b;
a = a - b;

document.write(`<h2>after swaping : ${a}</h2>`);
document.write(`<h2>after swaping : ${b}</h2>`);

if (a > b) {
    document.write("<h2>A is max</h2>");
}
else {
    document.write("<h2>B is max</h2>");
}