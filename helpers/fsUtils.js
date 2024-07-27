const fs = require('fs');
const util = require('util');

// fs.readFile promise version
const readFromFile = util.promisify(fs.readFile);

/**
 * Function to write data to the JSON file given a destination and content
* @param {string} destination The file to write to
* @param {object} content The content to be written to the file
*   @returns {void} Nothing
*/
const writeToFile = (destination, content) => 
    fs.writeFile(destination, JSON.stringify(content, null, 4), 
    (err) => err ? console.error(err) : console.info(`\nData written to ${destination}`)
);

/**
 * Function to read data from a given file and append content
 *  @param {object} content The content to be appended
 *  @param {string} file The path to the file to be appended to
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    })
};

module.exports = { readFromFile, writeToFile, readAndAppend };