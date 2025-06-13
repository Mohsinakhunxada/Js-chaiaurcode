// Singleton - when a constructor makes an object it will make only  of its own

// if declared by literals, it wont be singleton
// constructors alwasy give you singleton
// object literals

// following is the constructor method
// Object.create
// this will always yield singleton


const mysym = Symbol('key1')

const JsUser = {
    name : 'Mohsin',
    'full name' : 'Mohsin Khan',
    // if a key is given in string only, then it can only be accessed with [].
    age : 25,
    [mysym] : 'mykey1',
    location: 'Peshawar',
    email: 'mohsin@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}

// if you want to access an object, it has multiple ways

console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser["full name"]);
// symbol will always be dictated with []
console.log(JsUser[mysym]);
console.log(typeof JsUser[mysym]);

// if you want to override a key in object, just simply write it

JsUser.email = 'yameen@gm.com'
// if you want no changes in future for a key you can simply freeZe it
Object.freeze(JsUser)
JsUser.email = 'mubeen@g.com'
console.log(JsUser);







