function ucapanSelamat(pagi, siang, malam) {
  const selamat = {};
  selamat.pagi = pagi;
  selamat.siang = siang;
  selamat.malam = malam;

  selamat.pagi = function () {
    return `selamat ${this.pagi}`;
  };
  selamat.siang = function () {
    return console.log(`selamat ${this.siang}`);
  };
  selamat.malam = function () {
    return console.log(`selamat ${this.malam}`);
  };
  return selamat;
}

function perhitungan(input1, input2, input3) {
  const matematika = {};
  matematika.input1 = input1;
  matematika.input2 = input2;
  matematika.input3 = input3;

  matematika.penjumlahan = function () {
    return this.input1 + this.input2 + this.input3;
  };

  return matematika;
}
