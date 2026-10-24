onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", function() {
    // Kumpulan gombalan maut kamu
    const pesan = [
        "Kemarin aku udah bikin kerangka papan bunga",
        "tapi sayangnya udah ga dilanjutin lagi",
        "projeknya mangkrak ditengah jalan",
        "tapi, gapapa lah, ini ada bunga untuk via",
        "memang ga seberapa, tapi semoga bisa bikin kamu tersenyum😊",
        "semoga kamu suka yaa...😁",
        "Congratulation 🥰🤍"
    ];
    
    let urutanPesan = 0;
    let urutanHuruf = 0;
    let lagiNgapus = false;
    let wadahTeks = document.getElementById("teks-ngetik");
    
    function efekNgetik() {
        let kataSekarang = pesan[urutanPesan];
        
        if (lagiNgapus) {
            wadahTeks.innerHTML = kataSekarang.substring(0, urutanHuruf - 1);
            urutanHuruf--;
        } else {
            wadahTeks.innerHTML = kataSekarang.substring(0, urutanHuruf + 1);
            urutanHuruf++;
        }
        
        let kecepatan = 100;
        if (lagiNgapus) kecepatan = 50; // Kalau ngapus lebih ngebut
        
        // Kalau kalimat udah beres diketik semua
        if (!lagiNgapus && urutanHuruf === kataSekarang.length) {
        if(urutanPesan === pesan.length - 1){
                kecepatan = 8000;
        }       else{
                kecepatan = 3000;
        }
            lagiNgapus = true;
        } 
        // Kalau kalimat udah beres dihapus semua
        else if (lagiNgapus && urutanHuruf === 0) {
            lagiNgapus = false;
            urutanPesan++;
            if (urutanPesan === pesan.length) urutanPesan = 0; // Ngulang ke awal
            kecepatan = 500; // Jeda setengah detik sebelum ngetik kalimat baru
        }
        
        setTimeout(efekNgetik, kecepatan);
    }
    
    // Nunggu 2 detik dulu biar bunga merahnya mekar, baru mulai ngetik
    setTimeout(efekNgetik, 2000);
});