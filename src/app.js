console.log("Merhaba Kodlama.io")

let dolarBugun = 9.30
let dolarDun = 9.20
dolarDun = "Balıkesir"

{
    let dolarDun = 9.10
}

console.log(dolarDun)

//CONST ile değişken tanımlar isek onu bir kere tanımlayabiliriz
//euroDun = 10.5 yaparsak read-only hatası alırız
const euroDun = 11.2
//euroDun = 10.5

console.log(euroDun)

//Array
let konutKredileri = ["Konut kredisi","Emlak konut kredisi","Kamu konut kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")

console.log("Deneme")