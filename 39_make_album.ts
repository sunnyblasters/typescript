
type Album = {

    name:string;
    title:string;
    tracks?: string

}


let makeAlbum = (name:string , title:string, tracks?:string)=>{

    let myAlbum:Album = {

        name : name,
        title : title,

    }

    if (tracks !== undefined){

        myAlbum.tracks = tracks
    }

    return myAlbum
}


console.log(makeAlbum('Atif','TereBin'));
console.log('');

console.log(makeAlbum('Atif','wohLamhe','123ABC'));

console.log('');

console.log(makeAlbum('Arjit','TumheeHo','456xyz'));
