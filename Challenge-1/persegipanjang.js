// function GanjilGenap(a) {
    
// }

// function zoomin() {

// }

// export function logout() {

// }

let id = ["alana", "aji", "rinal"]
let arr = [5, 8, 9];
let stat = "admin";

const idMasuk = "aji";
const arrMasuk = 8;

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])


// GanjilGenap(arr)

// for (let i = 0; i < id.length; i++) {
//     if ((idMasuk  id[i]) && (arrMasuk === arr[i])) {
//         console.log("Masuk")
//     } else {
//         console.log("Tidak Masuk")
//     }
// }


if (idMasuk === "aji" && arrMasuk === 8) {
    if (stat === "admin") {
        console.log("masuk sebagai admin")
    } else if (stat === "user") {
        console.log("masuk sebagai user")
    } else {
        console.log("tidak masuk")
    }
} 