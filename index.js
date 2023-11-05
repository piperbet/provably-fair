// Import the 'crypto' module for hashing
const crypto = require('crypto');

// Define and set the required values
const serverSeed = '3b79a56f040e384220d5d8c17834b017e9f9da348f3bfb7cd86d4644bb61ad8d';
const clientSeed = 'f054ef22bef543fb7bd392419bea3727ed297e9820d72335c68de209c08149c9';
const playCount = 1611;

// Calculate the spin using the provided seeds and playCount
const spin = getSpin(serverSeed, clientSeed, playCount);
console.log(`Spin: ${spin}`);

// Function to calculate the spin from a hash
function getSpinFromHash(hash, maxSpin = 99999999) {
    // Extract a portion of the hash
    const subHash = hash.slice(0, 13);
    // Convert the extracted portion to a number
    const valueFromHash = Number.parseInt(subHash, 16);
    // Calculate the spin result based on the extracted value
    const result = valueFromHash / Math.pow(2, 52);
    // Return the spin within the specified maximum range
    return Math.floor(result * maxSpin);
}

// Function to get the spin based on the seeds and playCount
function getSpin(serverSeed, clientSeed, playCount) {
    // Combine the seeds and playCount with an optional game parameter
    const seed = getCombinedSeed('BOXES', serverSeed, clientSeed, playCount);
    // Generate a hash from the combined seed
    const hash = crypto.createHmac('sha256', seed).digest('hex');
    // Calculate and return the spin using the hash
    return getSpinFromHash(hash);
}

// Function to combine and create a seed value
function getCombinedSeed(game, serverSeed, clientSeed, playCount) {
    // Prepare an array with the main parameters
    const seedParameters = [serverSeed, clientSeed, playCount];
    // Add the game parameter if needed
    if (game) seedParameters.unshift(game);
    // Combine the parameters into a single seed value
    return seedParameters.join('-')
}
