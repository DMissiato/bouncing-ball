
// Variables
const frameRate = 16;
const arenaSize = 35;
const ballSize = 1;
const ballVelocity = 3;
const reboundMargin = ballVelocity / 12;

// Functions
const getRandomInteger = (max) =>
{
    return Math.floor(Math.random() * max);
};

export {
    frameRate,
    arenaSize,
    ballSize,
    ballVelocity,
    reboundMargin,
    getRandomInteger
}