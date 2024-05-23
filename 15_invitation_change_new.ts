let invitation = ['Sohail', 'Asif', 'Khaliq', 'Raheel']


// invitation.map(function(item){

//     console.log(`Dear Mr. ${item}\n\n 'You are invited for a Dinner\n'`)

// })




invitation.unshift('Kashif')
// console.log(invitation);

invitation.splice(3,0,'Rasheed')
// console.log(invitation);


invitation.push('Tahir')
 
console.log(invitation);

invitation.map(function(name){

    console.log(`Dear Mr. ${name}\n\n 'I found a bigger dinner table so I am invited more Peoples. \n'`)

})
