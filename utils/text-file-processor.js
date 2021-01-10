const fs = require('fs');
const readline = require('readline');

const SchemaValidator = require('./schema-validator')
const roversSchema = require('../schema/rover-schema.json')

module.exports = async function textFileToJson(fileLocation) {
	const configuration = {
		plateau: [],
		rovers: []
	};

	let roversData = {};
	const fileStream = fs.createReadStream(fileLocation);

	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});
	
	for await (const line of rl) {
		const data = line.split(':');
		if (data[0].toLowerCase() === 'plateau') {
			configuration.plateau = data[1].split(' ');
		} else {
			const [roverName, roverKey] = data[0].split(' ');
			if (!roverName && !roverKey) {
				throw Error('Must be formatted <RoverName> <Landing | Instructions>:[data]');
			}
			let roverKeyData;

			if (roverKey.toLowerCase() === 'landing') {
                roverKeyData = data[1].split(' ');
                if (roverKeyData.length !== 3) {
                    throw Error('Landing data can only have 3 items')
                }
			} else if (roverKey.toLowerCase() === 'instructions') {
                roverKeyData = data[1].split('');
			}

			roversData = {
				...roversData,
				[roverName]: {
					...roversData[roverName],
					[roverKey]: roverKeyData
				}
			};
		}
	}
    configuration.rovers = transformRoversDataToArray(roversData);
    
    const validateSchema = new SchemaValidator()
    validateSchema.validate(configuration, roversSchema)
	return configuration;
};

function transformRoversDataToArray(roversData) {
	let data = [];
	for ([roverName, roverData] of Object.entries(roversData)) {
		data.push({
			name: roverName,
			...roverData
		});
	}

	return data;
}
