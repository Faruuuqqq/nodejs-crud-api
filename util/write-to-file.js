const fs = require('fs');
const path = require('path');

module.exports = (data) => {
  console.log('Received data to write in file:', data);
  try {
    fs.writeFileSync(
      path.join(__dirname, 'data.json'),
      JSON.stringify(data),
      'utf-8'
    );
  } catch (err) {
      console.log(err);;
    }
  };