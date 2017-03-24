module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    
        less: {
            development: {
                options: {
                    paths: ['less'],
                    compress: false,
                    cleancss: true,
                    dumpLineNumbers: 'comments'
                },
                files: {
                    '../themesmkdb_ui/css/style.css': '../themes/mkdb_ui/less/style.less'
                }
            }
        },

        bake: {
            your_target: {
                options: {
                    // Task-specific options go here.
                },

                files: {
                    // files go here, like so:
                    "../themes/mkdb_ui/templates/page--type-photogallery.tpl.php": "../themes/mkdb_ui/_templates-src/page--type-photogallery.tpl.php",
                    "../themes/mkdb_ui/templates/page--type-article.tpl.php": "../themes/mkdb_ui/_templates-src/page--type-article.tpl.php",
                    "../themes/mkdb_ui/templates/page.tpl.php": "../themes/mkdb_ui/_templates-src/page.tpl.php",
                    "../themes/mkdb_ui/templates/page--front.tpl.php": "../themes/mkdb_ui/_templates-src/page--front.tpl.php"
                }
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            less: {
                files: [
                    '../themes/mkdb_ui/less/**/*.less'
                ],
                tasks: ['less', 'postcss']
            },

            bake: {
                files: [
                    '../themes/mkdb_ui/_templates-src/**/*.php'
                ],
                tasks: ['bake']
            }

        },
        
        postcss: {
            options: {
              processors: [
                require('autoprefixer')({browsers: ['last 2 versions', 'ie 10']})
              ]
            },
            dist: {
              src: '../themes/mkdb_ui/css/style.css'
            }
        }
    });

    // load npm modules
    grunt.loadNpmTasks('grunt-bake');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    // register tasks
    grunt.registerTask('default', ['bake', 'less', 'postcss', 'watch']);
    grunt.registerTask('jenkins', ['bake', 'less', 'postcss']);
   
    //grunt.registerTask('default', ['less', 'postcss', 'copy:main', 'watch']);
   // grunt.registerTask('jenkins', ['less', 'postcss', 'copy:main']);
};
