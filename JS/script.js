"strict mode";
let datetime = new Date();
console.log(datetime);

const targetTime = new Date(2022, 5, 25);
console.log(targetTime);

let diff = targetTime - datetime;
console.log(diff);
const days = diff / (1000 * 60 * 60 * 24);
console.log(days);
