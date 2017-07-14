const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  prompting() {
    // TODO: prompt if no name provided
  }

  writing(name) {
    // TODO: handle input, capitalize for class decl.,
    // trusting the user with choosing a reasonable class name
    let lowerCaseName = name.toLowerCase();
    console.log('writing', name);

    // View template
    this.fs.copyTpl(
      this.templatePath('_view.template.js'),
      this.destinationPath(`src/views/${lowerCaseName}/${lowerCaseName}.view.ts`), {
        lowerCaseName,
        name
      }
    );

    // Test template
    this.fs.copyTpl(
      this.templatePath('_test.template.js'),
      this.destinationPath(`src/views/${lowerCaseName}/${lowerCaseName}.test.ts`), {
        lowerCaseName,
        name
      }
    );
  }

};
