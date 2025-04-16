const transaksi = [
  {
    id: 1,
    nama: "Baju",
    harga: 100000,
    tanggal: "2025-01-01",
  },
  {
    id: 2,
    nama: "Celana",
    harga: 200000,
    tanggal: "2025-01-02",
  },
  {
    id: 3,
    nama: "Sepatu",
    harga: 300000,
    tanggal: "2025-01-03",
  },
  {
    id: 4,
    nama: "Topi",
    harga: 400000,
    tanggal: "2025-01-04",
  },
  {
    id: 5,
    nama: "Kacamata",
    harga: 500000,
    tanggal: "2025-01-05",
  },
  {
    id: 6,
    nama: "Tas",
    harga: 600000,
    tanggal: "2025-01-06",
  },
  {
    id: 7,
    nama: "Kaos",
    harga: 700000,
    tanggal: "2025-01-07",
  },
  {
    id: 8,
    nama: "Jaket",
    harga: 800000,
    tanggal: "2025-01-08",
  },
  {
    id: 9,
    nama: "Kemeja",
    harga: 900000,
    tanggal: "2025-01-09",
  },
  {
    id: 10,
    nama: "Celana Panjang",
    harga: 1000000,
    tanggal: "2025-01-10",
  },
];

let highTransaction = { harga: 0 };
for (let i = 0; i < transaksi.length; i++) {
  if (transaksi[i].harga > highTransaction.harga) {
    highTransaction = transaksi[i];
  }
}
console.log(highTransaction);
let lowestDate = highTransaction;

for (let i = 0; i < transaksi.length; i++) {
  if (transaksi[i].tanggal < lowestDate.tanggal) {
    lowestDate = transaksi[i];
  }
}
console.log(lowestDate);

let total = 0;
for (let i = 0; i < transaksi.length; i++) {
  total += transaksi[i].harga;
}
const sum = total / transaksi.length;

console.log(sum);
