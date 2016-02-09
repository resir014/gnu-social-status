module.exports = function (grunt) {
  'use strict';

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Project configuration
    pkg: grunt.file.readJSON('package.json'),

    // Builds a complete site to the `_site` folder
    jekyll: {
      serve: {
        options: {
          bundleExec: true,
          serve: true,
          config: '_config.yml'
        }
      }
    },

    // Lint SCSS files using scss-lint
    scsslint: {
      files: [
        '_sass/*.scss'
      ],
      options: {
        bundleExec: true,
        config: '.scss-lint.yml',
        colorizeOutput: true
      }
    },

    // Lint JS files using XO
    xo: {
      options: {
        quiet: true
      },
      source: ['js/**/*.js'],
      gruntfile: ['Gruntfile.js']
    }

  });

  // test task
  grunt.registerTask('test', ['xo', 'scsslint']);

  // jekyll task
  grunt.registerTask('serve', 'jekyll:serve');

  // default task
  grunt.registerTask('default', ['test']);
};
