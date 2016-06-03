module.exports = function(grunt) {

    grunt.registerTask('default', [
        'env:dev', 
        'clean:all', 
        'less:dev', 
        'sass:dev',
        'copy:dev'
        //'build'
    ]);

};
