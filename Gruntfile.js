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
        }
      }
    });
  
    grunt.registerTask('default', ['less', 'watch']);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
  };