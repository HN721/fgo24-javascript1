const data = [
  [
    1,
    [
      "Hosea",
      1,
      2,
      {
        string: ["Hosea Nainggolan", { value: "hello" }],
      },
    ],
  ],
];

console.log(data[0][1][3].string[1].value);
