const data = [
  [
    0,
    [
      1,
      2,
      3,
      {
        string: [
          1,
          {
            value: "hallo",
          },
        ],
      },
    ],
  ],
];

console.log(data[0][1][3].string[1].value);
