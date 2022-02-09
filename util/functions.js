// This is a file reader that will scan files and find them with a ending of "ending" for the bots needs.
const fs = require("fs")

const getFiles = (path, ending) => {
    return fs.readdirSync(path).filter(f=> f.endsWith(ending))

}

module.exports = {
    getFiles
}