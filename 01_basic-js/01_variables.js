const accountId = 654;
let accountEmail = "mail@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2    Not Allowed
accountEmail = "google@mail.com";
accountPassword = 654321;
accountCity = "Indore";

/**
 * Prefer not to use var 
 * because of issue in block and 
 * functional scope
 */


console.table([accountId, accountEmail,accountPassword, accountCity, accountState]);