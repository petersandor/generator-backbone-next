const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  prompting() {
    // TODO: prompt if no name provided
  }

  writing(name) {
    // TODO: handle input, capitalize for class decl.,
    // trusting the user with choosing a reasonable class name
    let lowerCaseName = name.toLowerCase();

    // View template
    this.fs.copyTpl(
      this.templatePath('_collection.template.js'),
      this.destinationPath(`src/collections/${lowerCaseName}/${lowerCaseName}.collection.ts`), {
        lowerCaseName,
        name
      }
    );
  }

};
