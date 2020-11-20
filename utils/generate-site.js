const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if err, reject promis and sent err to the promise's .catch method
            if (err) {
                reject(err);
                // return out of th efunction here to make sure the promise doesnt accidentally execute the resolve() function as well
                return;
            }

            // if everythng went well, resolve the promise and sent the successful data to the .then methong
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Style sheet copied successfully!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };