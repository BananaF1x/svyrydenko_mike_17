let userName;
let lastName;
let email;
let age;
let chek = true;
let index;
do {
    userName = prompt("Enter your name").trim();
    if (userName != false) chek = false;
} while (chek)
userName[0].toUpperCase() + userName.slice(1).toLocaleLowerCase();
chek = true;
do {
    lastName = prompt("Enter your last name").trim();
    if (lastName != false) chek = false;
} while (chek)
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLocaleLowerCase();
document.write(`Full name: ${userName} ${lastName} <br>`); 
chek = true;
do {
    email = prompt("Enter your email").toLocaleLowerCase().replaceAll();
    if (email != false) chek = false;
} while (chek)
email = !email.includes("@") ? document.write(`Email: not valid email ${email} (symbol @ not exist) <br>`): 
    email.startsWith("@") ? document.write(`Email: not valid email ${email} (symbol @ find in first place) <br>`): 
    email.endsWith("@") ? document.write(`Email: not valid email ${email} (symbol @ find in last place) <br>`): 
    document.write(`Email: ${email} <br>`);

// if (!email.includes("@")) {
//     document.write(`Email: not valid email ${email} (symbol @ not exist) <br>`);
// } else if (email.startsWith("@")) {
//     document.write(`Email: not valid email ${email} (symbol @ find in first place) <br>`);
// } else if (email.endsWith("@")) {
//     document.write(`Email: not valid email ${email} (symbol @ find in last place) <br>`);
// } else {
//     document.write(`Email: ${email} <br>`);
// }

// switch (true) {
//     case email.startsWith("@"):
//         document.write(`Email: not valid email ${email} (symbol @ find in first place) <br>`);
//         break;
//     case email.endsWith("@"):
//         document.write(`Email: not valid email ${email} (symbol @ find in last place) <br>`);
//         break;
//     case !email.includes("@"):
//         document.write(`Email: not valid email ${email} (symbol @ not exist) <br>`);
//         break;
//     default:
//         document.write(`Email: ${email} <br>`);
// }

chek = true;
do {
    age = +prompt("Enter your birthday").replaceAll();
    if (!isNaN(age) && age > 1900 && age < 2023) chek = false;
} while ( chek )
today = new Date();
thisYear = today.getFullYear();
age = thisYear - age;
document.write(`Age: ${age} <br>`);