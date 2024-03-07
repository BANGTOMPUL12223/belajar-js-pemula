// Membuat kelas Mahasiswa
class Mahasiswa {
    constructor(nama, nim, jurusan, angkatan, alamat) {
      this.nama = nama;
      this.nim = nim;
      this.jurusan = jurusan;
      this.angkatan = angkatan;
      this.alamat = alamat;
    }
  
    // Mengembalikan biodata mahasiswa dalam bentuk string
    biodata() {
      return `Nama: ${this.nama}
  NIM: ${this.nim}
  Jurusan: ${this.jurusan}
  Angkatan: ${this.angkatan}
  Alamat: ${this.alamat}`;
    }
  }
  
  // Membuat objek mahasiswa
  const mahasiswa1 = new Mahasiswa(
    "John Doe",
    "1234567890",
    "Teknik Informatika",
    "2017",
    "Jl. Raya No. 1, Jakarta"
  );
  
  // Menampilkan biodata mahasiswa
  console.log(mahasiswa1.biodata());