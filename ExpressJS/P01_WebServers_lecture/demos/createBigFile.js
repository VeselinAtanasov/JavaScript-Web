const fs = require('fs');
const file = fs.createWriteStream('./file.txt');

for (let i = 0; i <= 1e5; i++) {
    file.write('Some text for filling the file...------------------------Other text and symbols 07437hdshahdahd');
}
file.end();