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
      this.templatePath('_view.template.js'),
      this.destinationPath(`src/views/${lowerCaseName}/${lowerCaseName}.view.ts`), {
        lowerCaseName,
        name
      }
    );

    // View template handlebars template
    this.fs.copyTpl(
      this.templatePath('_template.template.hbs'),
      this.destinationPath(`src/views/${lowerCaseName}/${lowerCaseName}.template.hbs`), {
        name
      }
    );

    // Test template
    this.fs.copyTpl(
      this.templatePath('_test.template.js'),
      this.destinationPath(`src/views/${lowerCaseName}/${lowerCaseName}.view.test.ts`), {
        lowerCaseName,
        name
      }
    );
  }

};
