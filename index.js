#! /usr/bin/env node

const path = require('path')

const validTextFile = require('./utils/validTextFile');
const textFileToJson = require('./utils/text-file-processor')
const roverManager = require('./utils/roverManager')

const main = async () => {
	if (process.argv.length < 2) {
		console.error('Usage: rover-cli <text file path>');
	}
	const fileLocation = path.join(__dirname, process.argv[2]);
	validTextFile(fileLocation);
	const roverConfiguration = await textFileToJson(fileLocation)
	const finalRoverLocationData = roverManager(roverConfiguration)
	finalRoverLocationData.forEach(locationData => console.log(locationData))
};

main();
