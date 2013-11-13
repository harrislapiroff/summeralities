module.exports = function(grunt) {

	grunt.initConfig({
		copy: {
			main: {
				files: [
					{expand: true, flatten: true, src: ["_static/bower_components/bootstrap/dist/fonts/*"], dest: "static/bootstrap/fonts/"},
					{expand: true, flatten: true, src: ["_static/bower_components/bootstrap/dist/js/*"], dest: "static/bootstrap/js/"},
					{expand: true, flatten: true, src: ["_static/bower_components/bootstrap/dist/css/*"], dest: "static/bootstrap/css/"},
					{expand: true, flatten: true, src: ["_static/bower_components/font-awesome/css/*"], dest: "static/font-awesome/css/"},
					{expand: true, flatten: true, src: ["_static/bower_components/font-awesome/fonts/*"], dest: "static/font-awesome/fonts/"},
					{src: ["_static/bower_components/jquery/jquery.min.js"], dest: "static/jquery/jquery.min.js"},
					{src: ["_static/base.css"], dest: "static/base.css"}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy'])

};