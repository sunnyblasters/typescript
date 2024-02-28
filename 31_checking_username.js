var current_users = ['sunny', 'faisal', 'humair', 'arbaaz', 'salman'];
var new_users = ['Kashif', 'Raheel', 'Sunny', 'Azeem', 'Arbaaz'];
for (var i = 0; i < current_users.length; i++) {
    if (current_users.includes(new_users[i].toLowerCase()))
        console.log("Sorry the username \"".concat(new_users[i], "\" has been taken"));
    else {
        console.log("The username \"".concat(new_users[i], "\"is available."));
    }
}
