let Data = "secret data";


class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }


    viewData() {
        console.log("data= ", Data);
    }

}

let student1 = new User("bg", "bg@email.com");
let student2 = new User("ts", "ts@email.com");
let teacher = new User("teacher", "teacher@email.com");



//  question 2 ----------------------------------------------------------

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        Data = "some new value";
    }
}

let admin = new Admin("admin", "admin@college.com");




