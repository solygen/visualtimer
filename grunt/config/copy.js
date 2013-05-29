module.exports = {
    main: {
        files: [
                {
                expand: true,
                cwd: 'lib/',
                src: ['<%= pkg.name %>.min.js'],
                dest: 'builds/',
                filter: 'isFile',
                    rename: function(dest, src) {
                        return dest + src.replace('.min.js', '.<%= pkg.version %>.min.js');
                    }
                }
        ],
    },
    update: {
        files: [
                {
                expand: true,
                cwd: 'vendors/jquery/',
                src: ['jquery.min.js'],
                dest: 'lib/'
                },
                {
                expand: true,
                cwd: 'vendors/font-awesome/build/assets/font-awesome/css/',
                src: ['font-awesome.min.css'],
                dest: 'lib/'
                }
        ]
    }

};