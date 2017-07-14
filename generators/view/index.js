const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  prompting() {
    // TODO: prompt if no name provided
  }

  writing(name) {
    // TODO: handle input, capitalize for class decl.,
    // trusting the user with choosing a reasonable class name
    let fileName = name.toLowerCase();
    console.log('writing', name);

    // View template
    this.fs.copyTpl(
      this.templatePath('_view.template.js'),
      this.destinationPath(`src/views/${fileName}/${fileName}.view.ts`), {
        name
      }
    );

    // Test template
    this.fs.copyTpl(
      this.templatePath('_test.template.js'),
      this.destinationPath(`src/views/${fileName}/${fileName}.test.ts`), {
        name
      }
    );
  }

};
