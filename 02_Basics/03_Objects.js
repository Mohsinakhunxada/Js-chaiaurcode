// Singleton - when a constructor makes an object it will make only  of its own

// if declared by literals, it wont be singleton
// constructors alwasy give you singleton
// object literals

// following is the constructor method
// Object.create
// this will always yield singleton

const JsUser = {
    name : 'Mohsin',
    age : 25,
    location: 'Peshawar',
    email: 'mohsin@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}

// if you want to access an object, it has multiple ways

console.log(JsUser.email);

