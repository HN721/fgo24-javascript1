console.log("loop while");
let u = 1;
while (u <= 5) {
  if (u === 4) {
    console.log("Fazztrack");
  } else {
    console.log(u);
  }
  u++;
}
let s = 5;
while (s > 0) {
  let tempp = "";
  let y = 0;
  while (y < s) {
    tempp += "*";
    y++;
  }
  console.log(tempp);
  s--;
}
let k = 5;
let tempp = "";
while (k > 0) {
  tempp += "*";
  console.log(tempp);
  k--;
}
console.log("loop for");
for (let i = 0; i < 5; i++) {
  let tempp = "";
  for (let y = 0; y < i; y++) {
    tempp += "*";
  }
  console.log(tempp);
}
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    console.log("Fazztrack");
  } else {
    console.log(i);
  }
}
for (let i = 5; i >= 0; i--) {
  let tempp = "";
  for (let y = 0; y < i; y++) {
    tempp += "*";
  }
  console.log(tempp);
}
console.log("loop do while");
let x = 0;
do {
  if (x === 4) {
    console.log("Fazztrack");
  } else {
    console.log(x);
  }
  x++;
} while (x <= 5);

let i = 0;

do {
  let tempp = "";
  for (let y = 0; y < i; y++) {
    tempp += "*";
  }
  console.log(tempp);
  i++;
} while (i <= 5);

let j = 5;
do {
  let tempp = "";
  for (let y = 0; y < j; y++) {
    tempp += "*";
  }
  console.log(tempp);
  j--;
} while (j >= 0);
