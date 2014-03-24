module.exports = function(grunt) {

	grunt.initConfig({
		clean: ['static/'],
		copy: {
			main: {
				files: [
					{expand: true, flatten: true, src: ["_static/bower/bootstrap/dist/fonts/*"], dest: "static/bootstrap/fonts/"},
					{expand: true, flatten: true, src: ["_static/bower/bootstrap/dist/js/*"], dest: "static/bootstrap/js/"},
					{expand: true, flatten: true, src: ["_static/bower/bootstrap/dist/css/*"], dest: "static/bootstrap/css/"},
					{expand: true, flatten: true, src: ["_static/bower/font-awesome/css/*"], dest: "static/font-awesome/css/"},
					{expand: true, flatten: true, src: ["_static/bower/font-awesome/fonts/*"], dest: "static/font-awesome/fonts/"},
					{src: ["_static/bower/jquery/dist/jquery.min.js"], dest: "static/jquery/jquery.min.js"},
					{src: ["_static/base.css"], dest: "static/base.css"}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean','copy'])

};