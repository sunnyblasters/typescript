

let magicianName:string[] = ['Chris Angel', 'Derren Brown', 'James Randi','Greg Wilson']


let magicianFunction = (name:string[])=>{

    for (const i of name) {
        
        console.log(i);
        
    }

}

magicianFunction(magicianName)