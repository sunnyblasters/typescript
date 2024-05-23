"use strict";
let invitation = ['Sohail', 'Asif', 'Khaliq', 'Raheel'];
invitation.unshift('Kashif');
// console.log(invitation);
invitation.splice(3, 0, 'Rasheed');
// console.log(invitation);
invitation.push('Tahir');
console.log(invitation);
while (invitation.length > 2) {
    let guest_removed = invitation.pop();
    console.log(`sorry Sir ${guest_removed} we can’t invite you in dinner`);
}
console.log(invitation);
invitation.forEach(function (name) {
    console.log(`Dear Mr. ${name} You Are Still Invited For A dinner .`);
});
invitation.pop();
invitation.pop();
console.log(invitation);
