module.exports = function(grunt) {
	const pathCss = "/Users/gabrielchatelain/Desktop/mycustom/static/mySelf/css/";
	const pathJs = "/Users/gabrielchatelain/Desktop/mycustom/static/mySelf/js/";
	const path = "/Users/gabrielchatelain/Desktop/mycustom/static/";
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
	});
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask("default", ["babel", "uglify"]);
};
