// const instaUser = new Object()
// above is a singleton object

const instaUser = {}
// above is a non singleton object

instaUser.id = "123abc"
instaUser.name = "Sammy"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: "asb12@gm.com",
    Fullname: {
        userfullname:{
            firstname: "Mohsin",
            lastname: "Khan"
        }
    }

}

// Above is an example of nested object, you can easily fetch any part of the object with a "dot notation" ie "."

console.log(regularUser.Fullname.userfullname.firstname);

