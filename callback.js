// To make code asyncronous javascript uses the setTimeout method

// Scenaio
/**
 * 1. Register
 * 2. Send welcome email
 * 3. Login
 * 4. Get user data
 * 5. Display user data
 */
// function waitForThreeSeconds() {
//     let ms = 3000 + new Date().getTime();
//     while(new Date() < ms) {}
// }

function register() {
    setTimeout(() => {
        console.log('Register end');
    }, 1000);
}
function sendEmail() {
    setTimeout(() => {
        console.log('Email end');
    }, 1000);
}
function login() {
    setTimeout(() => {
        console.log('login end');
    }, 1000);
}
function getUserData() {
    setTimeout(() => {
        console.log('got user data');
    }, 1000);
}
function displayUserData() {
    setTimeout(() => {
        console.log('user data dislayed');
    }, 1000);
}

register();
sendEmail();
login();
getUserData();
displayUserData();

console.log('other application work!');