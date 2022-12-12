class Customer{

    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;

    }
    get name(){
        return this.makeName()
    }
        makeName(){
            return this.username + ' ' + this.email
        }
    
        static getTotal(){
            return 5
        }
}

let customer = new Customer("aya","mabaoujaya@gmail.com","****")


console.log(customer)
console.log(customer.username)
console.log(customer.makeName())
console.log(customer.name)
console.log(Customer.getTotal())

class Material{

    constructor(name,price){
        this.name=name;
        this.price=price;
        

    }}