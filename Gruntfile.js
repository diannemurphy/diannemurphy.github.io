module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    image_resize: {
      resize: {
        options: {
          width: 90,
          height: 90,
          crop: true,
          gravity: 'North',
          overwrite: true
        },
        src: 'images/*.jpg ',
        dest: 'images/thumbs/'
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    },

    shell : {
     jekyllBuild : {
         command : 'bundle exec jekyll build'
     },
     jekyllServe : {
         command : 'bundle exec jekyll serve'
     }
    },

  });

  //the image magick tasks
  grunt.loadNpmTasks('grunt-image-resize');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-shell');


  // Default task(s).
  grunt.registerTask('default', ['image_resize', 'imagemin', 'shell']);

};
