module.exports = function(grunt) {
	const pathCss = "/Users/gabrielchatelain/Desktop/mycustom/static/mySelf/css/";
	const pathJs = "/Users/gabrielchatelain/Desktop/mycustom/static/mySelf/js/";
	const path = "/Users/gabrielchatelain/Desktop/mycustom/static/";
	const pathMedia = "/Users/gabrielchatelain/Desktop/mycustom/media/";
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			my_target: {
				files: [{
						expand: true,
						cwd: pathCss,
						src: ['*.css', '!*.min.css'],
						dest: pathCss,
						ext: ".min.css"
					}]
					/*combine: {
						files: {
							"static/allCss.css": [pathCss + "/*.min.css"],
						}
					}*/
			}
		},
		less: {
			development: {
				options: {
					paths: [path]
				},
				files: {
					[pathCss + "my_custom.css"]: [pathCss + "sources/*.less"]
				}
			}
		},
		babel: {
			options: {
				sourceMap: true,
				//stage: 1,
			},
			files: {
				expand: true,
				src: [pathJs + "**/*.es6"],
				ext: "-compiled.js"
			},
		},
		uglify: {
			options: {
				manage: false,
			},
			my_target: {
				files: {
					[pathJs + "mainPage.min.js"]: [
						pathJs + "sources/*.js",
					],
					[path + "jquery.min.js"]: [path + "jquery.js"]
				},
			},
		},
		imagemin: {
			dynamic: {
				files: [{
					cwd: pathMedia + "home/" + "fond_ecran/",
					src: ['/*.{jpg,jpeg,png}'],
					dest: pathMedia + "home/" + "fond_ecran/",
				}, {
					cwd: pathMedia + "home/" + "logo/",
					src: ['/*.{jpg,jpeg,png}'],
					dest: pathMedia + "home/" + "logo/",
				}, ]
			}
		},
	});
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask("default", ["babel", "uglify", "less", "cssmin"]);
};