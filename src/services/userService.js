import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;

                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }
    }

    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation Problem. ${field} is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation Problem. ${user.age} is not a number`, user))
        }
        return hasErrors
    }

    //yup-formik -> react
    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation Problem. ${field} is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation Problem. ${user.age} is not a number`, user))
        }

        return hasErrors
    }


    add(user) {
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            case "empleyee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(new DataError("This user can not be added. Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }

    list() {
        //return this.users
    }

    getById(id) {
        //return this.users.find(u => u.id === id)
    }

}