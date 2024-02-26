let invitation = ['Sohail', 'Babar', 'Khaliq', 'Raheel']


// invitation.map(function(item){

//     console.log(`Dear Mr. ${item}\n\n 'You are invited for a Dinner\n'`)

// })



let guest_cant_make_it = 'Babar'

invitation[invitation.indexOf(guest_cant_make_it)] = 'Asif'

invitation.map(function(name){

    console.log(`Dear Mr. ${name}\n\n 'You are invited for a Dinner\n'`)

})

console.log(`Mr . ${guest_cant_make_it} can't make it Dinner tonight`)
