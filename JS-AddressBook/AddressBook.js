console.log("******* Welcome To Address Book System *******");

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
    get FirstName() {
        return this.first_name;
    }
     get LastName() {
        return this.last_name
    }
     get Address() {
        return this.address
    }
     get Zip() {
        return this.zip
    }
     get City() {
        return this.city
    }
     get State() {
        return this.state
    }
     get PhoneNumber() {
        return this.phone_number
    }
     get Email() {
        return this.email
    }
    toString(){
        return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : "+ this.address + ", City : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone Number : "+ this.phoneNumber + ", Email : "+ this.email;
    }
    set firstName(firstName){
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (firstNameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "**** FIRST NAME is Incorrect ****";
    }

    set lastName(lastName){
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (lastNameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "**** LAST NAME is Incorrect ****";
    }

    set address(address){
        let addressRegex = RegExp('^[a-zA-Z0-9#,]{4,}$');
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "**** ADDRESS is Incorrect ****";
    }

    set city(city){
        let cityStateRegex = RegExp('^[a-zA-z]{4,}$');
        if (cityStateRegex.test(city))
            this._city = city;
        else
            throw "**** CITY is Incorrect ****";
    }

    set state(state){
        let cityStateRegex = RegExp('^[a-zA-z]{4,}$');
        if (cityStateRegex.test(state))
            this._state = state;
        else
            throw "**** STATE is Incorrect ****";
    }

    set zip(zip){
        let zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "**** ZIP is Incorrect ****";
    }

    set phoneNumber(phoneNumber){
        let phoneNumberRegex = RegExp("^[0-9]{2}\\s{1}[0-9]{10}$");
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "**** PHONE NUMBER is Incorrect ****";
    }

    set email(email){
        let emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "**** EMAIL ADDRESS is Incorrect ****";
    }
}
let addressBookArray = new Array();

function contactExists(firstName, lastName) {
    return addressBookArray.some(contact => contact.firstName == firstName && contact.lastName == lastName);
}

function editContact(firstName, lastName, property, newValue) {
    if (contactExists(firstName, lastName)) {
        switch (property) {
            case "address":
                addressBookArray.find((contact) => contact.firstName == firstName).address = newValue;
                break;
            case "city":
                addressBookArray.find((contact) => contact.firstName == firstName).city = newValue;
                break;
            case "state":
                addressBookArray.find((contact) => contact.firstName == firstName).state = newValue;
                break;
            case "zip":
                addressBookArray.find((contact) => contact.firstName == firstName).zip = newValue;
                break;
            case "phoneNumber":
                addressBookArray.find((contact) => contact.firstName == firstName).phoneNumber = newValue;
                break;
            case "email":
                addressBookArray.find((contact) => contact.firstName == firstName).email = newValue;
                break;
            default:
                console.log("Enter valid property");
        }
    }
    else {
        console.log("Contact Does Not Exist");
    }
}
function deleteContact(firstName, lastName){
    if(contactExists(firstName, lastName)){
        addressBookArray = addressBookArray.filter((contact) => contact.firstName != firstName && contact.lastName != lastName);
    }else{
        console.log("Contact Does Not Exist");
    }
}

try{
    addressBookArray.push(new Contact("Santhosh", "Naik", "Places", "Hyd", "Ts", "87342", "9494291232", "kittums@gmail.com"));
}
catch(e){
    console.log(e);
}
try{
    addressBookArray.push(new Contact("Niharika", "Vanapari", "Places", "Hyd", "Ts", "87442", "9494291233", "Nihams@gmail.com"));
}
catch(e){
    console.log(e);
}
console.log(addressBookArray);

console.log("\nAfter Editing Contact")
editContact("Santhosh","Niha","address","Hyd");
console.log(addressBookArray);

console.log("\nAfter Deleting Contact");
deleteContact("Niharika","Vanapari")
console.log(addressBookArray);