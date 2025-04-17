for (let i = 1; i <= 5; i++) {
  let space = "";
  for (let m = 5; m > i; m--) {
    space += " ";
  }
  let stars = "";
  for (let s = 0; s < i; s++) {
    stars += "* ";
  }
  console.log(space + stars);
}

for (let i = 5; i >= 1; i--) {
  let stars = "";
  if (i === 5 || i === 5 - (5 - 1)) {
    for (let j = 5; j >= 1; j--) {
      stars += "* ";
    }
  } else {
    for (let j = 5; j >= 1; j--) {
      if (j === 5 || j === 5 - (5 - 1)) {
        stars += "* ";
      } else {
        stars += "  ";
      }
    }
  }

  console.log(stars);
}

for (let i = 1; i <= 5; i++) {
  let tring1 = "";
  for (let j = 5; j > i; j--) {
    tring1 += "* ";
  }
  let tring2 = "";
  for (let j = 1; j < i; j++) {
    tring2 += " *";
  }
  console.log(tring1 + " " + tring2);
}

for (let i = 1; i <= 5; i++) {
  let margins = "";
  for (let m = 5; m > i; m--) {
    margins += "  ";
  }
  let star = "*";
  console.log(margins + star);
}
