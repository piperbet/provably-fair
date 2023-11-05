# Provably Fair

To ensure fairness and fun, we use a provably fair method to determine the outcome of each item you unbox. This method guarantees the randomness of the game, just like the fairness of rolling dice or using a deck of cards in a physical game.

## Game Outcome

There are three variables that determine the item you receive:

1. **Your Hand:** This is a code you can change at any time, similar to choosing 'rock, paper, or scissors' in a game. You can also view other users' choices.

2. **Our Hand:** A secret code revealed only when you choose to do so.

3. **Play Count:** The number of games you've played.

The outcome is generated using a combination of:

- **Client Seed:** A passphrase from your browser, which you can change. You can also check other players' seeds.

- **Server Seed:** A long number from us, shown in an encrypted form before you play. This ensures a predetermined result while keeping it fair. You can see the unhashed Server Seed after unboxing an item to verify past outcomes.

- **Play Count:** Ensures each game's outcome is different.

## Probability

The probability of winning a specific item remains constant, regardless of how many times you play. There's no pattern to determine when valuable items will be won - it's all about sheer randomness. You can check the probability of each item by clicking 'Toggle Rates' to see the chances displayed as percentages.

# Verification
You can independently verify any previous roll by using the code displayed below. Simply input the client seed, the un-hashed server seed and the "Play Count"/nonce of your roll. You can execute this code yourself using Node.js, but we understand that for some of you, this may be beyond your technical know-how. So, we have created an easy way for you to execute this code directly from your browser. It runs the exact same code which is shown below, without the hassle of having to set up Node.js on your home computer. You simply need to input the 3 seed values: client seed, server seed and playCount before pressing Execute.

# Running locally
Clone this repository and run `node .` in the root directory. Modify the seeds and nonce to verify your own rolls.

# Run directly in your browser
Open the `index.html` file in your browser and input the seeds and nonce to verify your own rolls.
Or access the codepen: https://codepen.io/joaorafaelm/pen/MWLbxOG
