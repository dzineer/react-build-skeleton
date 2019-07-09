/*let sassMix = require('laravel-mix');
let reactMix = require('laravel-mix');
let vueMix = require('laravel-mix');*/
let laravelMix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/*
reactMix.react('resources/assets/js/reactjs/reactjs.js', 'public/js');
sassMix.sass('resources/assets/sass/app.scss', 'public/css');
vueMix.js('resources/assets/js/vue/vue-app.js', 'public/js');
*/

laravelMix
    .react('resources/assets/js/reactjs/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .js('resources/assets/js/vue/vue-app.js', 'public/js');