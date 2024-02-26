let invitation = ['Sohail', 'Asif', 'Khaliq', 'Raheel']


// invitation.map(function(item){

//     console.log(`Dear Mr. ${item}\n\n 'You are invited for a Dinner\n'`)

// })





// invitation.map(function(name){

//     console.log(`Dear Mr. ${name}\n\n 'I found a bigger dinner table so I am invited more Peoples. \n'`)

// })

invitation.unshift('Kashif')
// console.log(invitation);

invitation.splice(3,0,'Rasheed')
// console.log(invitation);


invitation.push('Tahir') 




// if (invitation.length > 2){

//     let new_list = invitation.pop()

//     console.log(`Sorry ${new_list} you are no longer invied for a dinner.`)


// }

console.log(invitation);

for (let i = 2 ; i < invitation.length ; i++){

    // let new_list = invitation.pop()

    console.log(`Sorry ${invitation[i]} you are no longer invied for a dinner.`)

}

invitation.pop()
invitation.pop()
invitation.pop()
invitation.pop()
invitation.pop()
console.log(invitation);


invitation.forEach(function(name){

    console.log(`Dear Mr. ${name} You Are Still Invited For A dinner .`)

})

invitation.pop()
invitation.pop()
console.log(invitation);
