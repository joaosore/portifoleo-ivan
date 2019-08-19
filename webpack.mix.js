let mix = require('laravel-mix');

mix

	.sass('assets/css/main.scss', 'assets/css')

	.scripts([
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
		'node_modules/owl.carousel2/dist/owl.carousel.js',
		'assets/js/imagesloaded.pkgd.min.js',
		'assets/js/anime.min.js',
		'assets/js/uncover.js',
		'assets/js/demo1.js',
		'assets/js/main.js',
	], 'js/app.js')

	// Unifica Todos CSS em um aquivos APP.css
	.styles([
		'node_modules/bootstrap/dist/css/bootstrap.min.css',
		'node_modules/owl.carousel2/dist/assets/owl.carousel.min.css',
		'node_modules/owl.carousel2/dist/assets/owl.theme.default.min.css',
		'node_modules/animate.css/animate.min.css',
		'assets/css/components/base.css',
		'assets/css/components/uncover.css',
		'assets/css/main.css',
	], 'css/app.css')