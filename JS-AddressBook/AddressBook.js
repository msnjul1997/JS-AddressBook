class Contact{
    constructor(first_name, last_name,address, city, state, zip, phone_number, email){
        this.first_name = first_name
        this.last_name = last_name
        this.address = address
        this.city = city
        this.state = state
        this.zip = zip
        this.phone_number = phone_number
        this.email = email
    }
}
let person1 = new Contact("Santhosh","Naik","Places","Hyd","Ts",87523,9494291232,"kittums@gmail.com")
console.log(person1);