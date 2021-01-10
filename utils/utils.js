
const validTextFile = async (fileName) => {
    // A simple file extension checker. Doesn't validate the actual file is a text file
    const invalidTextFile = fileName.split('.').pop() === 'txt'

    if (!invalidTextFile) {
        console.error('Not a valid text file')
        process.exit(1)
    }
}

module.exports = {
	validTextFile
}