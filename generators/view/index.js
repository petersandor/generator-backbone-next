const Generator = require('yeoman-generator');
const path = require('path');
const fs = require('fs');

module.exports = class extends Generator {

  prompting() {
    // TODO: prompt if no name provided
  }

  writing(name) {
    console.log('writing', name);

    this.fs.copyTpl(
      this.templatePath('_template.js'),
      this.destinationPath(`src/views/${name}/${name}.ts`), {
        name
      }
    );
  }

};
