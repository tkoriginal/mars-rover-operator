const validTextFile = require('../utils/validTextFile')

test('Should file when not given a .txt file', () => {
    expect(() => validTextFile('./data/file.png')).toThrow(Error('Not a valid text file'))
})

test('Should continue execution when given a text file', () => {
    validTextFile('./data/instructions.txt')
    expect(true).toBe(true)
})