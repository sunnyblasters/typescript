let newName = 'Sohail Rasheed'





let titleCase1 = function(data:string){

    let words = data.toLowerCase().split(" ")

    for (let i = 0; i < words.length; i++) {
        
        words[i] = words[i][0].toUpperCase()+words[i].slice(1)
    }

    console.log(words.join(' '));
    
    return words
}

console.log(newName.toLowerCase())
console.log(newName.toUpperCase());
titleCase1(newName)