
/**
 * @function: Generate array of numbers
 * @param {Integer}: limit of numbers to be generated
 */
function generateNumbers(limit) {
    var numberArray = [];
    for (let i = 1; i <= limit; i ++) {
        numberArray.push(i);
    }
    return numberArray
}

/**
 * @function: Shuffle array of numbers. Prints the result in console log.
 * @param {Array} numbers 
 */
function shuffleArray(numbers) {
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    console.log(numbers);
}

/**
 * @function: Main function to call the helper funcitons
 * @param {Integer} limit 
 */
function randomNumberGenerator(limit) {
    shuffleArray(this.generateNumbers(limit));
}

 randomNumberGenerator(10000);