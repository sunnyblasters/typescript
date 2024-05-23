

let magicianName1:string[] = ['Chris Angel', 'Derren Brown', 'James Randi','Greg Wilson']


let greatAdd = function(name:string[]){


    for (let i = 0 ; i < name.length ; i++){

        magicianName1[i] = 'The Great ' + name[i]
    }

}


greatAdd(magicianName1)



let magicianFunction1 = (name:string[])=>{

    for (const i of name) {
        
        console.log(i);
        
        
    }

}

magicianFunction1(magicianName1)