const dataPenjualanNovel = [
    {
      idProduct: "BOOK002421",
      namaProduk: "Pulang - Pergi",
      penulis: "Tere Liye",
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: "BOOK002351",
      namaProduk: "Selamat Tinggal",
      penulis: "Tere Liye",
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: "BOOK002941",
      namaProduk: "Garis Waktu",
      penulis: "Fiersa Besari",
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: "BOOK002941",
      namaProduk: "Laskar Pelangi",
      penulis: "Andrea Hirata",
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];
  

const getInfoPenjualan = (dataPenjualan) => {

    let dataPenjualanObj = {
        totalKeuntungan: "",
        totalModal: "",
        persentaseKeuntungan: "",
        produkBukuTerlaris: "",
        penulisTerlaris: "",
      };

     let Obj = dataPenjualan.map((x) => {
         let penulis = x.penulis;
         let namaProduk = x.namaProduk;
         let hargaJual = x.hargaJual;
         let hargaBeli = x.hargaBeli;
         let totalTerjual = x.totalTerjual;
         let sisaStok = x.sisaStok;


         // TOTAL KEUNTUNGAN

        let keuntungan = hargaJual * totalTerjual - hargaBeli * (totalTerjual + sisaStok)
        if(keuntungan < 0){
            keuntungan = 0
        }

        // MODAL
        let modal = hargaBeli * (totalTerjual + sisaStok)

         return {
             penulis,
             namaProduk,
             keuntungan,
             modal,
             totalTerjual
         }
     })

     // total keuntungan dan total modal
         let totalKeuntungan = 0
         let totalModal = 0
         let terjual = []

         Obj.forEach((val, index) => {
             totalKeuntungan += val["keuntungan"];
             totalModal += val["modal"];
             terjual[index] = val["totalTerjual"];
     })

     // convert total keuntungan dan total modal
     dataPenjualanObj["totalKeuntungan"] = Intl.NumberFormat("id-ID", {
         style: "currency",
         currency: "IDR",
     }).format(totalKeuntungan).split(",")[0];

     dataPenjualanObj["totalModal"] = Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(totalModal).split(",")[0];

     // penjualan tertinggi
     let terjualTertinggi = terjual.sort().reverse()[0];

     // total presentase
     let totalPersentase = String(Math.round((totalKeuntungan / (totalKeuntungan + totalModal)) * 100)) + "%";

    dataPenjualanObj["persentaseKeuntungan"] = totalPersentase

     // nama produk dan nama penulis
     let bukuTerlaris = Obj.filter((obj) => {
         return obj.totalTerjual === terjualTertinggi;
     });

     let namaBuku = bukuTerlaris[0]["namaProduk"]
     let namaPenulis = bukuTerlaris[0]["penulis"]

     dataPenjualanObj["produkBukuTerlaris"] = namaBuku
     dataPenjualanObj["penulisTerlaris"] = namaPenulis

    return {dataPenjualanObj}

};

console.log(getInfoPenjualan(dataPenjualanNovel))