// let password = prompt("Masukkan Password");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("password valid");
// } else {
//   console.log("tidak valid");
// }

// function namaSiswa(nama) {
//   for (let rapot in nama) {
//     console.log(`Nama: ${rapot} memiliki nilai rata-rata = ${nama[rapot]}`);
//   }
// }

// const siswa = {
//   rahmat: 100,
//   prakoso: 200,
// };

// namaSiswa(siswa);
// let halo = "halo dunia";

// console.log('halo: ', halo);

// const Matematika = {
//   penjumlahan: function (a, b) {
//     return a + b;
//   },
//   pengurangan: function (a, b) {
//     return a - b;
//   },
//   perkalian: function (a, b) {
//     return a * b;
//   },
//   pembagian: function (a, b) {
//     return a / b;
//   },
// };

// console.log(Matematika.penjumlahan(1, 155));
// console.log(Matematika.perkalian(2, 2));
// console.log(Matematika.pembagian(5, 5));

let movies = [
  {
    judul: "Harry Potter",
    kategori: "Fantasy",
    umur: "14+",
    rating: "9",
  },

  {
    judul: "Alice in Wonderland",
    kategori: "Fantasy",
    umur: "11+",
    rating: "8",
  },

  {
    judul: "Avengers Infinity War",
    kategori: "Action",
    umur: "16+",
    rating: "10",
  },

  {
    judul: "Avatar",
    kategori: "Fantasy",
    umur: "16+",
    rating: "6",
  },

  {
    judul: "Last of Us",
    kategori: "Horror",
    umur: "16+",
    rating: "5",
  },

  {
    judul: "Venom",
    kategori: "Action",
    umur: "16+",
    rating: "7",
  },

  {
    judul: "Sekawan Limo",
    kategori: "Horror",
    umur: "15+",
    rating: "8",
  },
];

const filmHorror = movies
  .filter((movie) => movie.kategori === "Horror")
  .map((animes) => animes.judul);
// const filmHorror = movies.filter((movie) => movie.kategori === "Horror");
