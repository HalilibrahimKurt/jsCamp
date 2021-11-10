// function addToCart(quantity, productName = "elma") {
//     console.log("Sepete Eklendi\n" +
//         "Ürün:" + productName +
//         " Adet: " + quantity)
// }
// addToCart(10)

// let sayHello = ()=>{
//     console.log("Hello World!")
// }

// sayHello()

// let sayHello2 = function() {
//     console.log("Hello World 2!")
// }

// sayHello2()


// function addToCart2(productName, quantity, unitPrice) {

// }

// addToCart2("Elma", 5, 10)
// addToCart2("Armut", 2, 20)
// addToCart2("Limon", 7, 12)

// function addToCart3(product) {
//     console.log("Ürün: " + product.productName + "\n" +
//         "Adet: " + product.quantity + "\n" +
//         "Fiyat: " + product.unitPrice
//     )
// }
// let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 }
// addToCart3(product1)

// let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 }
// let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 }

// product2 = product3
// product2.productName = "KARPUZ"
// console.log(product3.productName)

// let sayi1 = 10
// let sayi2 = 20
// sayi1 = sayi2
// sayi2 = 100
// console.log(sayi1)

// function addToCart4(products) {
//     console.log(products)
// }

// let products = [
//     {productName: "Elma", unitPrice: 10, quantity: 5},
//     {productName: "Armut", unitPrice: 10, quantity: 5},
//     {productName: "Karpuz", unitPrice: 10, quantity: 5}
// ]

// addToCart4(products)

// function add(number1, number2) {
//     console.log(number1 + number2)
// }

// function add2(number1, number2, number3) {
//     console.log(number1 + number2 + number3)
// }

// add(20,30)
// add2(10,20,30)

// function add3(...numbers) { //rest
//     let total = 0
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i]
//     }
//     console.log(total)
// }
// add3(10,20)
// add3(10,20,30)
// add3(10,20,30,40)

// let numbers = [30,10,500,600,120]

// console.log(numbers)

// console.log(Math.max(...numbers))

// let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirler,karadenizSehirler]] = [
//     {name:"İç Anadolu", population:"20M"},
//     {name:"Marmara", population:"30M"},
//     {name:"Karadeniz", population:"10M"},
//     [
//         ["Ankara","Konya"],
//         ["İstanbul","Bursa"],
//         ["Sinop","Trabzon"]
//     ]
// ]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
// console.log(icAnadoluSehirleri)

// let newProductName, newUnitPrice, newQuantity
// ({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
// = {productName: "Elma", unitPrice: 10, quantity: 5})
// console.log(newProductName)