const dataPembelian = [
    {
        tanggal: "2 April 2025",
        barang: "mie",
        harga: 3000,
    },
    {
        tanggal: "5 April 2025",
        barang: "saus",
        harga: 2500,
    },
    {
        tanggal: "7 April 2025",
        barang: "kecap",
        harga: 2500,
    },
    {
        tanggal: "20 Februari 2025",
        barang: "kacang",
        harga: 10000,
    },
    {
        tanggal: "3 Maret 2025",
        barang: "biskuit",
        harga: 12000,
    },
    {
        tanggal: "13 Januari 2025",
        barang: "wafer",
        harga: 11000,
    },
    {
        tanggal: "25 Maret 2025",
        barang: "aqua",
        harga: 5000,
    },
    {
        tanggal: "22 Februari 2025",
        barang: "susu",
        harga: 15000,
    },
    {
        tanggal: "17 Maret 2025",
        barang: "kopi",
        harga: 20000,
    },
    {
        tanggal: "20 April 2025",
        barang: "beras",
        harga: 50000,
    },
]

// transaksi tertinggi
let transaksiTertinggi = 0

for (let i = 0; i < dataPembelian.length; i++) {
    if (dataPembelian[i].harga > transaksiTertinggi) {
        transaksiTertinggi = dataPembelian[i].harga
    }
}

console.log(`transaksi tertinggi adalah sejumlah ${transaksiTertinggi}`)

// tanggal transaksi terendah

let transaksiTerendah = {
    harga: 0
}

for (let i = 0; i < dataPembelian.length; i++) {
    if (transaksiTerendah.harga === 0 || dataPembelian[i].harga < transaksiTerendah.harga) {
        transaksiTerendah = dataPembelian[i]
    }
}

console.log(`transaksi terendah terjadi pada tanggal ${transaksiTerendah.tanggal}`)

// barang harga rata-rata

let hargaRataRata = 0

for (let i = 0; i < dataPembelian.length; i++) {
    hargaRataRata += dataPembelian[i].harga
}

hargaRataRata = hargaRataRata / dataPembelian.length
console.log(`rata-rata harga pembelian barang adalah ${hargaRataRata}`)