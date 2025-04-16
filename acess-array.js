const data = [
  [
    1,
    [
      "Hosea",
      1,
      2,
      {
        string: ["Hosea Ganteng", { value: "hello" }],
      },
    ],
  ],
];

console.log(data[0][1][3].string[1].value);
