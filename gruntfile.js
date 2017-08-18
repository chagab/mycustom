module.exports = function(grunt) {
	const path = "/Users/gabrielchatelain/Desktop/mycustom/static/";
	const pathMedia = "/Users/gabrielchatelain/Desktop/mycustom/media/";
	const pathLib = "/Users/gabrielchatelain/Desktop/mycustom/static/lib/";
	const pathCss = "/Users/gabrielchatelain/Desktop/mycustom/static/mainPage/css/";
	const pathJs = "/Users/gabrielchatelain/Desktop/mycustom/static/mainPage/js/";
	const pathImage = "/Users/gabrielchatelain/Desktop/mycustom/static/mainPage/image/";
	const pathDesigner = "/Users/gabrielchatelain/Desktop/mycustom/static/TShirtDesigner/";
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {
					paths: [pathLib]
				},
				files: {
					[pathCss + "my_custom.css"]: [pathCss + "/*.less"]
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
				}, {
					expand: true,
					cwd: `${pathLib}bootstrap/css/`,
					src: ['**/bootstrap.css', '**/!*.min.css'],
					dest: `${pathLib}bootstrap/css/`,
					ext: ".min.css"
				}, {
					expand: true,
					cwd: `${pathLib}`,
					src: ['**/animates.css', '**/!*.min.css'],
					dest: `${pathLib}`,
					ext: ".min.css"
				}, ]
			},
			target: {
				files: {
					[`${path}my_custom.min.css`]: [`${path}lib/animates.min.css`, `${path}lib/bootstrap/css/bootstrap.min.css`, `${path}mainPage/css/my_custom.min.css`, `${pathImage}sprite/sprite.css`]
				}
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
			},
			dist: {
				files: [{
					expand: true,
					src: [pathJs + "**/*.es6"],
					ext: "-compiled.js",
				}, {
					expand: true,
					src: [pathDesigner + "**/*.es6"],
					ext: "-compiled.js",
				}, ]
			}
		},
		uglify: {
			options: {
				manage: false,
			},
			my_target: {
				files: [{
					[`${pathJs}mainPage.min.js`]: [pathJs + "*-compiled.js", "!sketch-compiled.js"],
				}, {
					[`${pathLib}jquery.min.js`]: [pathLib + "jquery.js"],
				}, {
					[`${pathDesigner}js/TshirtDesigner.min.js`]: [pathDesigner + "js/*-compiled.js"],
				}, {
					[`${path}my_custom.min.js`]: [`${pathLib}jquery.min.js`, `${pathLib}bootstrap/js/bootstrap.min.js`, `${pathJs}mainPage.min.js`],
				}],
			},
		},
		'string-replace': {
			dist: {
				files: [{
					expand: true,
					cwd: `${pathDesigner}js/TshirtDesigner.min.js`,
					src: '**/*',
					dest: `${pathDesigner}js/TshirtDesigner.min.js`,
				}],
				options: {
					replacements: [{
						pattern: 'use strict;',
						replacement: '',
					}]
				}
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: `${pathMedia}home/fond_ecran/`,
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
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask("default", ["babel", "uglify", "string-replace", "less", "cssmin"]);
};