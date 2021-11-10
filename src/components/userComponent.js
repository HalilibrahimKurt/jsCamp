import User from "../models/user.js"
import UserService from "../services/userService.js"
console.log("User Component Yüklendi")

let userService = new UserService()
let user1 = new User(1,"Engin",)

userService.add("Halil")



let customer = {id:1,firstName:"Engin"}

//PROTOTYPİNG
customer.lastName = "Demiroğ"

console.log(customer.lastName)