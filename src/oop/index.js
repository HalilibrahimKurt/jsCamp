class Customer{
    constructor(id,customerName){
        this.id = id
        this.customerName = customerName
    }
}

let customer = new Customer(1,"12345");
console.log(customer.customerName)

//prototyping
customer.name = "Halil"
console.log(customer.name)
//prototyping
Customer.name1 = "Halil"
console.log(Customer.name1)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}