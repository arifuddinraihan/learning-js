// Let's learn Lowercase and Uppercase in js string


const lyrics = "I got a little bit of money feelin' my pockets Roll around like I run this shit";

// const lowerlyrics = lyrics.toLowerCase();
// console.log(lowerlyrics);

// const uperlyrics = lyrics.toUpperCase();
// console.log(uperlyrics);

let searchWord = "I ruN thIs ShiT";
// console.log(lyrics.includes(searchWord));

const lowerWordInLyrics = lyrics.toLowerCase().includes(searchWord.toLowerCase());
console.log(lowerWordInLyrics);


// ----------------------------------------------------------
// IndexOf used in string 

let wordIndex = "Rolla";
console.log(lyrics.indexOf(wordIndex));

if (lyrics.indexOf(wordIndex) !== -1)  {
    console.log("We found your word");
}
else {
    console.log("We did not find your word");
}


// -------------------------------------
// startsWith for searching a starting word/sentence in a string

console.log(lyrics.startsWith("I"));
console.log(lyrics.toLowerCase().startsWith("i got"));


// ------------------------------------------
// endsWith for searching an ending word / sentence in a string

console.log(lyrics.endsWith("shit"));
console.log(lyrics.toUpperCase().endsWith("SHIT"));