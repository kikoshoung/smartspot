module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            css: 'css/',
            js: 'js/',
            lib: 'lib/',
            tpl: 'tpl/'
        },
        banner: '/* v<%= pkg.version %>, last modified at <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> */', 
        uglify: {
            options: {
                banner: '<%= banner %>\n',
                beautify: {
                    ascii_only: true
                }
            },
            production: {
                files: [{
                    expand: true,     // Enable dynamic expansion.
                    cwd: '<%= dirs.js %>',      // Src matches are relative to this path.
                    src: ['**/*.js', '!**/*.min.js'], // Actual pattern(s) to match.
                    dest: '<%= dirs.js %>',   // Destination path prefix.
                    ext: '.js'   // Dest filepaths will have this extension.
                }]
            }
        },
        less: {
            production: {
                files: [{
                    expand: true,
                    cwd: '<%= dirs.css %>',
                    src: ['page/*.less'],
                    dest: '<%= dirs.css %>',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            options: {
                banner: '<%= banner %>',
                keepSpecialComments: 0
            },
            production: {
                files: [{
                    expand: true,
                    cwd: '<%= dirs.css %>',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: '<%= dirs.css %>',
                    ext: '.css'
                }]
            }
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '<%= banner %>\n'
            },
            base: {
                src: [
                    '<%= dirs.lib %>app.js',
                    '<%= dirs.lib %>require.js',
                    '<%= dirs.lib %>require-config.js',
                    '<%= dirs.lib %>platform.js'
                ],
                dest: '<%= dirs.js %>base.js'
            },
            lib: {
                src: [
                    '<%= dirs.lib %>jquery.js',
                    '<%= dirs.lib %>jquery.cookie.js',
                    '<%= dirs.lib %>underscore.js',
                    '<%= dirs.lib %>backbone.js'
                ],
                dest: '<%= dirs.js %>base-lib.js'
            }
        },
        htmlmin: {  
            options: {                                 
                    removeComments: true,
                    collapseWhitespace: true
            },                                
            production: {                                    
                files: [{
                    expand: true,
                    src: ['**/*.html', '!node_modules/**/*.html'],
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('prd', ['less', 'concat', 'html2js', 'cssmin', 'uglify', 'htmlmin']);
    grunt.registerTask('dev', ['less', 'concat', 'html2js']);
}; 

