const gulp = require('gulp')

/* A task default é como se fosse
o main do gulp */
gulp.task('default', () => {
    //console.log('Está rodando o gulp...')
    gulp.start('copiar')
})


gulp.task('copiar', ()=>{
    gulp.src('pastaA/**/*.txt')
    
    .pipe(gulp.dest('pastaB'))
})



