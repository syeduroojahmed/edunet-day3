function printOddDigitAlphabets() {
    let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // String of uppercase alphabets
    let result = [];

    // Loop through each alphabet
    for (let i = 0; i < alphabets.length; i++) {
        // Check if the position is odd (i.e., position + 1 is odd)
        if ((i + 1) % 2 !== 0) {
            result.push(alphabets[i]);
        }
    }

    // Print the result
    console.log(result.join(', '));
}

printOddDigitAlphabets();
