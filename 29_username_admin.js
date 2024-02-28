var myUsername = ['Sunny', 'Faisal', 'Humair', 'Arbaaz', 'Admin', 'Salman'];
for (var i = 0; i < myUsername.length; i++) {
    if (myUsername[i] == 'Admin') {
        console.log("Hello ".concat(myUsername[i], ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(myUsername[i], ", thank you for logging in again."));
    }
}
