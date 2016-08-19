module.exports = function(grunt) {


  var compileOptions = {

    mainConfigFile: 'public/js/main.js',
    baseUrl: 'public/js/src',
    include: ['../main'],
    out: 'public/js/main.min.js',
    removeCombined: false,
    findNestedDependencies: true,
    optimize: 'uglify2',

    //Removes console.logs for production
    onBuildWrite: function(moduleName, path, contents) {
      if (/(.*)js\/modules\/(.*)/.test(path)) return contents.replace(/console.log(.*);/g, ';');
      return contents;
    },
    hbs: {
      templateExtension: 'html',
      partialsUrl: 'src/templates/partials',
      disableHelpers: false,
      disableI18n: true,
      compileOptions: {}
    }

  };

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        options: compileOptions
      }
    },
    less: {
      development: {
        files: {
          "public/css/style-dev.css": "public/less/style.less"
        }
      },
      production: {
        options: {
          cleancss: true
        },
        files: {
          "public/css/style.css": "public/less/style.less"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less:production', 'requirejs']);

};