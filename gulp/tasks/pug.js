/*module.exports = function() {
    $.gulp.task('pug', function() {
        return $.gulp.src('src/pug/pages/*.pug')
            .pipe($.gp.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('build'))
            .on('end',$.bs.reload);
    });
};*/
module.exports = function() {
    $.gulp.task('pug', ()=>  {
        return $.gulp.src('src/pug/pages/*.pug')
            .pipe($.gp.pug({
                pretty: true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('build'))
            .on('end', $.bs.reload);
    });
};