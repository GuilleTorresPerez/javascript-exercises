const palindromes = function (string) {
    stringAlphanumeric = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(stringAlphanumeric);
    stringBackward = stringAlphanumeric.split("").reverse().join("");
    console.log(stringBackward);

    return stringAlphanumeric == stringBackward;
};

palindromes('Racecar!');

// Do not edit below this line
module.exports = palindromes;
