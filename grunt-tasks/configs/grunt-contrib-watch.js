module.exports = function(grunt) {

    grunt.config('watch', {
        dev : {
            //cwd: 'src/client/',
            files : {
                src : ['**/*/*.less'],
                tasks : ['default'],
            }
        }
    });

    /*grunt.event.on('watch', function(action, filepath, target) {
     grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
     });*/

};
