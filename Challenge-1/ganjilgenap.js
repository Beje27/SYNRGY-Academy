const prompt = require('prompt-sync')();
function tambahSaldo () {
   let saldoTambahan = Number(prompt('Masukkan jumlah tambahan: '))
   saldoAwal += saldoTambahan
   menu()
}

function tarikSaldo () {
    let saldoTarikan = Number(prompt('Masukkan jumlah tarikan: '))
    saldoAwal -= saldoTarikan
    menu()
}

function cekSaldo () {
    console.log('Saldo Anda: ' + saldoAwal)
    menu()
}
function menu () {
    console.log('1. Tambah Saldo')
    console.log('2. Tarik Saldo')
    console.log('3. Cek Saldo')
    console.log('4. Keluar')
    let pilihan = prompt ('masukan pilihan: ')

    if (pilihan === '1') {
        tambahSaldo()
    } else if (pilihan === '2') {
        tarikSaldo()
    } else if (pilihan === '3') {
        cekSaldo()
    } else if (pilihan === '4') {
        console.log('Terima kasih')
    } else {
        console.log('Pilihan tidak tersedia')
        menu()
    }
}

function login () {
    if (loginCount < 3) {
        let pin = prompt("Masukkan PIN: ")
        if (pin === "123456") {
            menu()
        } else {
            loginCount += 1
            main()
        }
    } else {
        console.log('ATM anda terbelokir')
    }
}

function main () {
    login()
}

let saldoAwal =  500000
let loginCount = 0
main()





