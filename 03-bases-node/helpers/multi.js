const fs = require('fs');
var colors = require('colors');

const createFile = async (base = 5, until = 10, list = false) => {
    let output = '';

    try{
        console.clear();
        if(list) {
            console.log('==================');
            console.log(`  Table ${base}   `);
            console.log('==================');
        }

        for(let i = 1; i <= until; i++) {
            output += `${base} * ${i} = ${ base * i} \n`;
        }
        let filename = `documents/Table-${base}.txt`;

        fs.writeFileSync(filename, output);

        if(list)
            console.log(output.green);

        return filename;
    }catch (err) {
        throw err;
    }
}

module.exports = {
    createFile
};