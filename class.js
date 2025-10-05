class karyawan {
    constructor(nama, jabatan, gaji) {
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }

    getInformation() {
        return `nama karyawan adalah ${this.nama}, dengan jabatan ${this.jabatan}, memiliki gaji ${this.gaji}`;
    }

    getHistoryOccupation() {
        this.occupations = ["ojol", "relawan", "komisaris"];
        return this.occupations;
    }
}

const Karyawan = new karyawan("pia", "professor", "150000000");
console.log(Karyawan.getInformation());