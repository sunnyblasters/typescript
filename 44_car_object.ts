

let myCar = function (manufacturer:string , model:number,color?:string, feature?:string){

    let myObj:{manufacturer:string; model:number,color?:string, feature?:string} = {

        manufacturer:manufacturer,
        model : model,
        // color: color,
        // feature: feature,
    }
    if (color !== undefined){

        myObj.color = color
    }
    if (feature !== undefined){

        myObj.feature = feature
    }
    return myObj


}

console.log(myCar('corrolla', 2018, 'black' ));
