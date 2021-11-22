import { BaseLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"
console.log("User Component Yüklendi")
let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","Demiroğ","Ankara")
let user2 = new User(2,"Halil","Kurt","Ankara")

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))

console.log("-------------------")
userService.load()
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)











// let customer = {id:1,firstName:"Engin"}
// //PROTOTYPİNG
// customer.lastName = "Demiroğ"

// console.log(customer.lastName)