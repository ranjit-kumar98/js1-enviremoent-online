const userId = 142
let emailId = "myemail@gmail.com"
var password = "1234"
city = "mumbai" // allow but prefer not to do, may be dangerous
let accountState; //value not assigned

//userId = 477//not allowed
emailId = "new@gmail.com" //allowed
password = "9887" //allowed
city = "kolkata"

/*
prefer not to use var in js, only const and let

*/
console.log(userId);
console.table([userId,emailId,password,city,accountState])