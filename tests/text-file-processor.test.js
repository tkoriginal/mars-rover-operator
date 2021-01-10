const path = require('path')
const textFileToJson = require('../utils/text-file-processor')

test('Should generate the right data structure based text file', async () => {
	const expectedData = {
		plateau: ['5', '5'],
		rovers: [
			{ name: 'Rover1', Landing: ['1', '2', 'N'], Instructions: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'] },
			{ name: 'Rover2', Landing: ['3', '3', 'E'], Instructions: ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'] }
		]
    }
    const fileLocation = path.join(__dirname,'./data/instructions.txt')
    expect(await textFileToJson(fileLocation)).toEqual(expectedData)
})

describe('Should throw error with bad instruction files', () => {
    it('Should throw error when there aren\'t enough parameters', async () => {
        const fileLocation = path.join(__dirname,'./data/bad-instructions1.txt')
        expect(() => textFileToJson(fileLocation)).rejects.toThrow(Error('Landing data must have 3 fields: X Y D[N/S/E/W]'))
    
    })
    it('Should throw error when schema isn\'t met', async () => {
        const fileLocation = path.join(__dirname,'./data/bad-instructions2.txt')
        expect(async () => await textFileToJson(fileLocation)).rejects.toThrow(Error('Invalid schema: Ensure you have followed the instruction in building the text file'))
    })
    it('Should throw error when the naming convention isn\'t follow', async () => {
        const fileLocation = path.join(__dirname,'./data/bad-instructions3.txt')
        expect(async () => await textFileToJson(fileLocation)).rejects.toThrow(Error('Must be formatted <RoverName> <Landing | Instructions>:[data]'))
    })
})

