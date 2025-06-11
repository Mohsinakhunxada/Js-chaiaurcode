const accountId = 14455;
let accountEmail = "hitesh@google.com";
var accountPassword = "123465";
accountCity = "Peshawar";

// accountId = 2 not allowed, bcz this const has already been assigned.

accountEmail = "hchc@gmail.com";
accountPassword = "1232455";
accountCity = "karachi";

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/* Do not use Var syntax now, bcz it had Scope issues (that {} curly braces issue), so from now onwards Java users enter only 2 syntax i-e Const & let
 */
