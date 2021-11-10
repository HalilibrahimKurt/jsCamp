// console.log("Merhaba Kodlama.io")

// let dolarBugun = 9.30
// let dolarDun = 9.20
// dolarDun = "Balıkesir"

// {
//     let dolarDun = 9.10
// }

// console.log(dolarDun)

// //CONST ile değişken tanımlar isek onu bir kere tanımlayabiliriz
// //euroDun = 10.5 yaparsak read-only hatası alırız
// const euroDun = 11.2
// //euroDun = 10.5

// console.log(euroDun)

// //Array
// let konutKredileri = ["Konut kredisi","Emlak konut kredisi","Kamu konut kredisi"]

// console.log("<ul>")
// for (let i = 0; i < konutKredileri.length; i++) {
//     console.log("<li>" + konutKredileri[i] + "</li>")
// }
// console.log("</ul>")

// let student = {id:1, name:"Halil"}
// function save(puan=100,ogrenci) {
//     console.log(ogrenci.name + " :" + puan)
// }

// save(undefined,student)

//rest
//varArgs
// let showProducts = function (id,...products) {
//     console.log(id)
//     console.log(products)
// }

//showProducts(10,"Laptop")
// let points = [1,2,3,50,60,14]
// console.log(Math.max(...points))
// console.log(Math.max(points))
// console.log(Math.max(1,2,3,50,60,14))

//console.log(..."ABC",..."DE","F",..."GH")


//Destructuring
// let populations = [10000,20000,30000,[40000,100000]]
// let [small,medium,high,[veryHigh,maximum]] = populations
// console.log(small)
// console.log(medium)
// console.log(high)
// console.log(veryHigh)
// console.log(maximum)

// function someFunction([small1],number) {
//     console.log(small1)
// }

// someFunction(populations)

// let category = {id:1,name:"İçecek"}

// console.log(category.id)
// console.log(category["name"])

// let {id,name} = category

// console.log(id)
// console.log(name)

