const helloWolrd = () => console.log(
    "New Hello World!"
);

const add = (a, b) => console.log(a + b);

const subtitle = "Zajęcia backend";
const sample = () => 'proba funkcji';

module.exports = {
    helloWolrd,
    add,
    subtitle,
    sample
}

console.log("functions.js loaded correctly");