module.exports = {
    main: {
        files: [
                {
                expand: true,
                src: ['<%= concat.js.dest %>'],
                dest: 'bin/',
                filter: 'isFile',
                    rename: function(dest, src) {
                        return dest + src.replace('.min.js', '.<%= pkg.version %>.min.js');
                    }
                },
                {
                expand: true,
                src: ['<%= concat.js.dest %>'],
                dest: 'bin/',
                filter: 'isFile'
            }
        ]
    }
};