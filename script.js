console.log("Enter password in the format: pswd('@') where @ is the password.");
var pswd = function(foo){
	if (foo==="foobar"){
		alert("Password accepted! You will be taken to the other site.");
		window.location.assign("http://www.w3schools.com")
	}
};