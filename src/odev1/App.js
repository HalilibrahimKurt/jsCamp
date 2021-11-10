//1- JavaScript ile istediğiniz kadar sayı parametre
//gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı 
//olarak asal olup olmadığını yazınız. 


// function findPrime(...numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         let sayac = 0
//         if (numbers[i] < 1){
//             console.log("Asal sayı 1'den büyük olmalıdır")
//         }
//         else{
//             for (let j = 0; j <= numbers[i]; j++) {
//                 if ((numbers[i]%j)==0) {
//                     sayac++
//                 }
//             }
//             if (sayac == 2) {
//                 console.log(numbers[i] + " asaldır")
//             }
//             else {
//                 console.log(numbers[i] + " asal değildir")
//             }
//         }

//     }
// }

// findPrime(4,5,9,8,7,13,23,43,0)

// //OUTPUT
// // 4 asal değildir
// // 5 asaldır
// // 9 asal değildir
// // 8 asal değildir
// // 7 asaldır
// // 13 asaldır
// // 23 asaldır
// // 43 asaldır
// // Asal sayı 1'den büyük olmalıdır



// //2- Parametre olarak girilen iki sayının arkadaş 
// //sayılar olup olmadığını bulan programı yazınız.

// function arkadasSayi(sayi1,sayi2) {
//     let toplam1 = 0
//     let toplam2 = 0

//     for (let i = 1; i < sayi1; i++) {
//         if (sayi1%i == 0) {
//             toplam1 += i
//         }
//     }
//     for (let i = 1; i < sayi2; i++) {
//         if (sayi2%i == 0) {
//             toplam2 +=i
//         }
//     }
//     if (sayi1 == toplam2 && sayi2 == toplam1) {
//         console.log(sayi1 + " ve " + sayi2 + " arkadaş sayıdır")
//     } else {
//         console.log("Arkadaş sayı değiller")
//     }
// }

// arkadasSayi(220,284)

//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function mukemmelSayi(...sayi) {
    let toplam = 0;
        for(let i = 1; i < sayi.length; i++)
        {
            if(sayi[i] % i == 0) {
                toplam += i;
            }
        }
        if(sayi == toplam) {
            console.log(sayi[i] + " Mükemmel bir sayidir");
        }
}


mukemmelSayi(28)

function deneme(sayi) {
    for (let i = 0; i <= sayi; i++) {
        console.log(sayi)
    }
}
deneme(1000)