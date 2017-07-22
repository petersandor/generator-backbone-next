const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  prompting() {
    // TODO: prompt if no name provided
  }

  writing(name) {
    // TODO: handle input, capitalize for class decl.,
    // trusting the user with choosing a reasonable class name
    let lowerCaseName = name.toLowerCase();

    // Model template
    this.fs.copyTpl(
      this.templatePath('_model.template.js'),
      this.destinationPath(`src/models/${lowerCaseName}/${lowerCaseName}.model.ts`), {
        lowerCaseName,
        name
      }
    );

    // Test template
    this.fs.copyTpl(
      this.templatePath('_test.template.js'),
      this.destinationPath(`src/models/${lowerCaseName}/${lowerCaseName}.model.test.ts`), {
        lowerCaseName,
        name
      }
    );
  }

};
