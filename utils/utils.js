
const validTextFile = async (fileName) => {
    const invalidTextFile = fileName.split('.').pop() === 'txt'

    if (!invalidTextFile) {
        console.error('Not a valid text file')
        process.exit(1)
    }
}

module.exports = {
	validTextFile
}