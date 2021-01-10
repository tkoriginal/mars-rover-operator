
module.exports = function (fileName) {
    // A simple file extension checker. Doesn't validate the actual file is a text file
    const invalidTextFile = fileName.split('.').pop() === 'txt'

    if (!invalidTextFile) {
        throw new Error('Not a valid text file')
    }
}
