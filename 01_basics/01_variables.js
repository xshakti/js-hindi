
const accountId = 144553  //contant value
let accountEmainl ="shakti@google.com"  //variable
var accountPassword = "1234" //variable
accountCity = "jaipur"   // diclare variable without making any memory
                        //this is bad way to variable declare
let accountState;  //if you are not define the value then js undefined value

// accountId =2  //not allowed

accountEmainl= " hc@ch.com"
accountPassword="454554"
accountCity+ "Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmainl, accountPassword, accountCity, accountState]);

