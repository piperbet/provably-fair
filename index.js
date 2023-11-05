const crypto = require('crypto');

// You need to set these 3 values
const serverSeed = '3b79a56f040e384220d5d8c17834b017e9f9da348f3bfb7cd86d4644bb61ad8d';
const clientSeed = 'f054ef22bef543fb7bd392419bea3727ed297e9820d72335c68de209c08149c9';
const playCount = 1611;

// Here we use the seeds to calculate the spin
const spin = getSpin(serverSeed, clientSeed, playCount);
console.log(`Spin: ${spin}`);


/* Below this line are algorithmic functions which we use to calculate the Spin
==================================================================================
==================================================================================
*/

function getSpinFromHash(hash, maxSpin = 99999999) {
    const subHash = hash.slice(0, 13);
    const valueFromHash = Number.parseInt(subHash, 16);
    
    // Get dynamic result for this roll
    const e = Math.pow(2, 52);
    const result = valueFromHash / e;
    return Math.floor(result * maxSpin);
}

function getSpin(serverSeed, clientSeed, playCount) {
    const seed = getCombinedSeed('BOXES', serverSeed, clientSeed, playCount);
    const hash = crypto.createHmac('sha256', seed).digest('hex');

    return getSpinFromHash(hash);
}

function getCombinedSeed(game, serverSeed, clientSeed, playCount) {
  // Add main parameters
  const seedParameters = [serverSeed, clientSeed, playCount];

  // Add game parameter if needed
  if (game) {
    seedParameters.unshift(game);
  }

  // Combine parameters to get seed value
  return seedParameters.join('-')
}
