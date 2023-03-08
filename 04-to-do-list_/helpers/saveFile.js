const fs = require('fs');

const saveDB = (data) => {
    const file = './db/data.txt';
    fs.writeFileSync(file, JSON.stringify(data));

}

module.exports = {
    saveDB,
}