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


function addToCart2(productName, quantity, unitPrice) {

}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 7, 12)

function addToCart3(product) {
    console.log("Ürün: " + product.productName + "\n" +
        "Adet: " + product.quantity + "\n" +
        "Fiyat: " + product.unitPrice
    )
}
let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 }
addToCart3(product1)

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 }
let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 }

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)