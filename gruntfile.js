module.exports = function(grunt) {
	const pathCss = "/Users/gabrielchatelain/Desktop/mycustom/static/mySelf/css/";
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
		}
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
