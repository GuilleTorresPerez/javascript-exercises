const reverseString = function(word) {
    // const wordArray = word.split('');
    // let wordReversed = '';
    // for(let i = wordArray.length - 1; i >= 0; i--) {
    //     wordReversed += wordArray[i];
    // }
    // console.log(wordReversed);
    // return wordReversed;

    return word.split('').reverse().join('');

};

reverseString("hola buenas que tal");

// Do not edit below this line
module.exports = reverseString;
