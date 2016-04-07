module.exports = function(grunt) {

  grunt.initConfig({
    jsDir: 'public/javascripts/',
    jsDistDir: 'dist/javascripts/',
    cssDir: 'public/stylesheets/',
    cssDistDir: 'dist/stylesheets/',
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: ['*.js'],
        dest: '.js'
      },
      css: {
        src: ['*.css'],
        dest: '.css'
      }
    },
    uglify: {
      options: {
        banner: '/*!   */\n'
      },
      dist: {
        files: {
          '.min.js': ['']
        }
      }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/*!   */\n'
        },
        files: {
          '.min.css': ['']
        }
      }
    },
    watch: {
    files: ['*.js', '*.css'],
    tasks: ['concat', 'uglify', 'cssmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'concat',
    'uglify',
    'cssmin',
    'watch'
  ]);

};
