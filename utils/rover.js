class Rover {
	constructor(name, startingLocation, plateau, instructions) {
		this.x = startingLocation[0];
		this.y = startingLocation[1];
		this.facing = startingLocation[2];
		this.name = name;
		// Limits to Rovers movement
		this.xMax = plateau[0];
		this.yMax = plateau[1];
		this.xMin = 0;
		this.yMin = 0;
		this.instructions = instructions;
		// instructions can only be executed once
		this.instructionsExecuted = false;
	}

	left() {
		switch (this.facing) {
			case 'N':
				this.facing = 'W';
				break;
			case 'W':
				this.facing = 'S';
				break;
			case 'S':
				this.facing = 'E';
				break;
			case 'E':
				this.facing = 'N';
				break;
		}
	}

	right() {
		switch (this.facing) {
			case 'N':
				this.facing = 'E';
				break;
			case 'W':
				this.facing = 'N';
				break;
			case 'S':
				this.facing = 'W';
				break;
			case 'E':
				this.facing = 'S';
				break;
		}
	}

	move() {
		switch (this.facing) {
			case 'N':
				if (this.y + 1 > this.yMax) {
					// if the rover is on the edge, we won't want to execute the same instruction again
					this.instructionsExecuted = true;
					throw new Error('Abort Abort! Rover will fall off the Plateau');
				}
				this.y += 1;
				break;
			case 'W':
				if (this.x - 1 > this.xMin) {
					this.instructionsExecuted = true;
					throw new Error('Abort Abort! Rover will fall off the Plateau');
				}
				this.x -= 1;
				break;
			case 'S':
				if (this.y - 1 > this.yMin) {
					this.instructionsExecuted = true;
					throw new Error('Abort Abort! Rover will fall off the Plateau');
				}
				this.y -= 1;
				break;
			case 'E':
				if (this.x + 1 > this.xMax) {
					this.instructionsExecuted = true;
					throw new Error('Abort Abort! Rover will fall off the Plateau');
				}
				this.x += 1;
				break;
		}
	}

	get location() {
		return `${this.name}: ${this.x} ${this.y} ${this.facing}`;
	}

	executeInstructions() {
		this.instructions.forEach((instruction) => {
			switch (instruction) {
				case 'R':
					this.right();
					break;
				case 'L':
					this.left();
				case 'M': {
					this.move();
				}
			}
		});
		// Once all instructions are executed sucessfully, we cannot execute them again.
		this.instructionsExecuted = true;
	}

	// Don't really need this but this method can be used to relay new instructions to the robot
	newInstruction(instructions) {
		this.instructions = instructions;
		this.instructionsExecuted = false;
	}
}
