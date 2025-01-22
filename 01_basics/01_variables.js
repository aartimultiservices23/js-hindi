const accountId = 123456789
let accountEmail = "shubhamgharde28@gmail.com"
var accoountPassword = "12345"
accountCity = "Bhandara"
let accountState;


// constant (const) = ye value hum chnage nahi kr skte hai...
// account_Id = 1  not allowed

accountEmail = "shubham@gmail.com"
accoountPassword = "12121212"
accountCity = "Nagpur"


console.log(accountId);
console.log(accountEmail);
console.log(accoountPassword);
console.log(accountCity);



/*
prefer not to use var
because of issue in block scope and functional scope {
this is the scope 
}
*/

console.table([accountId, accountEmail, accoountPassword, accountCity, accountState])