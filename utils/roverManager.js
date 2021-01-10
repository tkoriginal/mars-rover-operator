const Rover = require('./rover')

function roverManager({ plateau, rovers }) {
    const roversData = []
    const roverOutput = []
    rovers.forEach(({name, Landing, Instructions}) => {
        roversData.push(new Rover(name, Landing, Instructions, plateau))
    });
    roversData.forEach(rover => {
        try {
            rover.executeInstructions()
        } catch (error) {
            // If a rover is about to fall over cliff, operation is halted, but doesn't block other rovers from moving
            console.error(error)
        }
        roverOutput.push(rover.location)
    })
    return roverOutput
}

module.exports = roverManager