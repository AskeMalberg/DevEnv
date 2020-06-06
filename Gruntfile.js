module.exports = function(grunt) {
    require('jit-grunt')(grunt);
  
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "public/stylesheets/style.css": "public/less/styles.less" // destination file and source file
          }
        }
      },
      watch: {
        styles: {
          files: ['public/less/**/*.less'], // which files to watch
          tasks: ['less'],
          options: {
            nospawn: true
          }
        },
        js: {
          files: ['public/javascripts/pre/**/*.js'], // which files to watch
          tasks: ['concat', 'jshint'],
          options: {
            nospawn: true
          }
        }
      },
      concat: {
        dist: {
          src: ['public/javascripts/pre/script01.js', 'public/javascripts/pre/script02.js'],
          dest: 'public/javascripts/scripts.js',
        },
      },
      jshint: {
        beforeconcat: ['public/javascripts/pre/script01.js', 'public/javascripts/pre/script02.js'],
        afterconcat: ['public/javascripts/scripts.js']
      }
    });
  
    grunt.registerTask('default', ['less', 'concat', 'watch']);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
  };