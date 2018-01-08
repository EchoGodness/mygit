
//htmlmin插件的参数对象
var obj = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
}

//获取gulp对象
var gulp = require("gulp");

//导入插件
var htmlmin = require("gulp-htmlmin"); //html压缩和优化的插件
var uglify = require("gulp-uglify"); //js压缩插件
var rename = require("gulp-rename"); //重命名插件
var babel = require('gulp-babel'); //es6转es5
var minifyCss=require('gulp-minify-css');//压缩Css文件
//定义任务
gulp.task("htmlTask", function(){
    gulp.src("src/html/02_dafeiji.html")
        .pipe( htmlmin(obj) ) //使用插件htmlmin
        .pipe( rename("dafeiji.min.html") ) //使用插件rename
        .pipe( gulp.dest("dest/html") );
})

//压缩js的插件--es6转es5
gulp.task("bullet", function(){
    gulp.src("src/js/bullet.js")
        .pipe(babel({"presets": ["es2015"]})) //es6转es5
        .pipe( uglify() ) //使用插件uglify
        .pipe( rename("bullet.min.js") ) //使用插件rename
        .pipe( gulp.dest("dest/js") );
})
gulp.task("common", function(){
    gulp.src("src/js/common.js")
        .pipe(babel({"presets": ["es2015"]})) //es6转es5
        .pipe( uglify() ) //使用插件uglify
        .pipe( rename("common.min.js") ) //使用插件rename
        .pipe( gulp.dest("dest/js") );
})
gulp.task("enemy", function(){
    gulp.src("src/js/enemy.js")
        .pipe(babel({"presets": ["es2015"]})) //es6转es5
        .pipe( uglify() ) //使用插件uglify
        .pipe( rename("enemy.min.js") ) //使用插件rename
        .pipe( gulp.dest("dest/js") );
})
gulp.task("gameEngine", function(){
    gulp.src("src/js/gameEngine.js")
        .pipe(babel({"presets": ["es2015"]})) //es6转es5
        .pipe( uglify() ) //使用插件uglify
        .pipe( rename("gameEngine.min.js") ) //使用插件rename
        .pipe( gulp.dest("dest/js") );
})
gulp.task("myPlane", function(){
    gulp.src("src/js/myPlane.js")
        .pipe(babel({"presets": ["es2015"]})) //es6转es5
        .pipe( uglify() ) //使用插件uglify
        .pipe( rename("myPlane.min.js") ) //使用插件rename
        .pipe( gulp.dest("dest/js") );
})
//压缩css
gulp.task('cssTask', function(){
    gulp.src('src/css/dafeiji.css')
        .pipe(minifyCss())
        .pipe(rename("dafeiji.min.css") ) //使用插件rename
        .pipe(gulp.dest('dest/css'));
});


//默认任务
gulp.task("default", ["htmlTask","bullet","common","enemy","gameEngine","myPlane","cssTask"]);
/**
 * Created by Administrator on 2018/1/8 0008.
 */
