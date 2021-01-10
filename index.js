#! /usr/bin/env node

const welcome = require('cli-welcome');
const chalk = require('chalk');
const path = require('path')

const { validTextFile } = require('./utils/utils');
const textFileToJson = require('./utils/text-file-processor')
// const { version, description } = require('./package.json');
const roverManager = require('./utils/roverManager')
// // Alerts
// const success = chalk.green.inverse;
// const info = chalk.blue.inverse;
// const warning = chalk.keyword('orange').inverse;
// const error = chalk.red.bold.inverse;

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
