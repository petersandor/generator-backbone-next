'use strict';
const Generator = require('yeoman-generator');
const path = require('path');
const fs = require('fs');

const prompts = require('./prompts');

const appTemplatePath = path.join(path.dirname(require.resolve('backbone-next-template')), '..');

module.exports = class extends Generator {
  prompting() {
    return this
      .prompt(prompts)
      .then(answers => {
        this.appName = answers.appName;

        this.config.set('appName', this.appName);
      });
  }

  configuring() {
    const defaultPackageInfo = this.fs.readJSON(`${appTemplatePath}/package.json`);

    const newPackageInfo = {
      name: this.appName,
      private: true,
      version: '0.0.1',
      description: 'Next-gen Backbone app',
      scripts: defaultPackageInfo.scripts,
      repository: '',
      keywords: [],
      author: 'Thy name shalt be placeth here',
      dependecies: defaultPackageInfo.dependencies,
      devDependencies: defaultPackageInfo.devDependencies,
      jest: defaultPackageInfo.jest
    };

    this.fs.writeJSON(this.destinationPath('package.json'), newPackageInfo);
  }

  writing() {
    const excludeList = [
      'LICENSE',
      'README.md',
      'node_modules',
      'package.json'
    ];

    fs.readdir(this.sourceRoot(appTemplatePath), (err, files) => {
      if (err) {
        throw err;
      }

      const filesToCopy = files.filter(file => excludeList.indexOf(file) === -1);

      filesToCopy.forEach(file => {
        const fullFilePath = path.join(appTemplatePath, file);

        if (fs.lstatSync(fullFilePath).isDirectory()) {
          this.fs.copy(fullFilePath, file);
          return;
        }

        if (file === '.npmignore') {
          this.fs.copy(fullFilePath, '.gitignore');
        } else {
          this.fs.copy(fullFilePath, file);
        }
      });
    });
  }

  install() {
    this.installDependencies({bower: false});
  }
};
