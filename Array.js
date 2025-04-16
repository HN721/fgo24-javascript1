const student = [
  { name: "Jhon", score: 80 },
  { name: "Arie", score: 99 },
  { name: "Denis", score: 60 },
  { name: "Jane", score: 85 },
  { name: "Bob", score: 90 },
];
let total = 0;
for (let i = 0; i < student.length; i++) {
  total += student[i].score;
}
const sum = total / student.length;
let high = {
  score: 0,
};
for (let i = 0; i < student.length; i++) {
  if (student[i].score > high.score) {
    high = student[i];
  }
}
console.log(high);
let lowest = high;

for (let i = 0; i < student.length; i++) {
  if (student[i].score < lowest.score) {
    lowest = student[i];
  }
}
console.log(lowest);
