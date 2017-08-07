module.exports = function(grunt) {
	const pathCss = "/Users/gabrielchatelain/Desktop/mycustom/static/mySelf/css/";
	const pathJs = "/Users/gabrielchatelain/Desktop/mycustom/static/mySelf/js/";
	const path = "/Users/gabrielchatelain/Desktop/mycustom/static/";
	const pathMedia = "/Users/gabrielchatelain/Desktop/mycustom/media/";
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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
		uncss: {
			dist: {
				//reste ça à faire encore ! 
				//files: "/Users/gabrielchatelain/Desktop/mycustom/"
			},
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
					expand: true,
					cwd: pathMedia + "home/" + "fond_ecran/",
					src: ['**/*.{jpg,jpeg,png}'],
					dest: pathMedia + "home/" + "fond_ecran/",
				}, {
					expand: true,
					cwd: pathMedia + "home/" + "logo/",
					src: ['**/*.{jpg,jpeg,png}'],
					dest: pathMedia + "home/" + "logo/",
				}, {
					expand: true,
					cwd: pathMedia + "achetez/" + "categorie/",
					src: ['**/*.{jpg,jpeg,png}'],
					dest: pathMedia + "achetez/" + "categorie/",
				}, {
					expand: true,
					cwd: pathMedia + "achetez/" + "image_titre/",
					src: ['**/*.{jpg,jpeg,png}'],
					dest: pathMedia + "achetez/" + "image_titre/",
				}, {
					expand: true,
					cwd: pathMedia + "achetez/" + "logo/",
					src: ['**/*.{jpg,jpeg,png}'],
					dest: pathMedia + "achetez/" + "logo/",
				}, {
					expand: true,
					cwd: pathMedia + "achetez/" + "produit/",
					src: ['**/*.{jpg,jpeg,png}'],
					dest: pathMedia + "achetez/" + "produit/",
				}, {
					expand: true,
					cwd: pathMedia + "customise/" + "categorie/",
					src: ['**/*.{jpg,jpeg,png}'],
					dest: pathMedia + "customise/" + "categorie/",
				}, {
					expand: true,
					cwd: pathMedia + "customise/" + "image_titre/",
					src: ['**/*.{jpg,jpeg,png}'],
					dest: pathMedia + "customise/" + "image_titre/",
				}, {
					expand: true,
					cwd: pathMedia + "customise/" + "produit/",
					src: ['**/*.{jpg,jpeg,png}'],
					dest: pathMedia + "customise/" + "produit/",
				}, {
					expand: true,
					cwd: pathMedia + "collection_ephemere/" + "image/",
					src: ['**/*.{jpg,jpeg,png}'],
					dest: pathMedia + "collection_ephemere/" + "image/",
				}, {
					expand: true,
					cwd: pathMedia + "collection_ephemere/" + "mosaique/",
					src: ['**/*.{jpg,jpeg,png}'],
					dest: pathMedia + "collection_ephemere/" + "mosaique/",
				}, {
					expand: true,
					cwd: pathMedia + "vendre/" + "image_titre/",
					src: ['**/*.{jpg,jpeg,png}'],
					dest: pathMedia + "vendre/" + "image_titre/",
				}, ]
			}
		},
	});
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask("default", ["babel", "uglify", "less", "cssmin"]);
};