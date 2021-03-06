module.exports = function(grunt){
	var banner = '/*n<%= pkg.name %> <%= pkg.version %>';
		banner += ' - <%= pkg.description %>n<%= pkg.repository.url %>';
		banner += 'nBuilt on <%= grunt.template.today("yyyy-mm-dd") %>n*/\n';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['gruntfile.js','src/*.js'],
			options: {
				maxlen: 80,
				quotmark: 'single',
				eqeqeq: true
			}
		},
		concat: {
			options: {
				seperator: '//**************************//',
				banner: banner
			},
			build: {
				files: [{
					src: ['src/*.js'],
					dest: 'build/<%= pkg.name %>.js'	
				}]
			}
		},
		uglify: {
			options: {
				banner:banner
			},
			build: {
				files: {
					'build/<%= pkg.name %>.min.js': ['build/<%= pkg.name %>.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default',['jshint','concat','uglify']);
};
