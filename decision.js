const binatang = ["anjing", "kucing"];
for (let i = 0; i < binatang.length; i++) {
  console.log(binatang[i]);
}
switch (binatang) {
  case "anjing":
    console.log("anjing");
    break;
  case "kucing":
    console.log("kucing");
    break;
  default:
    console.log("tidak ada");
}
