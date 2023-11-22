const accountId = 14453

let accountEmail = "vansh@gmail.com"

var accountPassword = '12345'

accountCity = "Jaipur"


let accountState;

// accountId = 2 // not allowed

accountEmail = "nwqnweffwef.com"
accountPassword = '23233'
accountCity = "Delhi"

/*

prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountId);

console.table([accountEmail,accountPassword,accountEmail,accountCity,accountState])