"use strict";
let makeAlbum = (name, title, tracks) => {
    let myAlbum = {
        name: name,
        title: title,
    };
    if (tracks !== undefined) {
        myAlbum.tracks = tracks;
    }
    return myAlbum;
};
console.log(makeAlbum('Atif', 'TereBin'));
console.log('');
console.log(makeAlbum('Atif', 'wohLamhe', '123ABC'));
console.log('');
console.log(makeAlbum('Arjit', 'TumheeHo', '456xyz'));
