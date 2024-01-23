const inquirer = require('inquirer');

inquirer
  .prompt([
    {message:"write url:",
    name:"url"},
  ])
  .then((answers) => {
    var qr = require('qr-image');
    data=answers.url
    var qr_png = qr.image(data);
    qr_png.pipe(require('fs').createWriteStream('data.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

