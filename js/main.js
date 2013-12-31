App = {};

requirejs.config({
	baseUrl: './',
	paths: {
        'text': 'lib/require-text'
    }
});

require([
	'js/util',
	'js/router'
], function(util, router){
	var libList = ['lib/jquery', 'lib/underscore'];

	App.util = util;
	App.router = router;

console.log(App)

	if(!App.util.isPC) libList[0] = 'lib/zepto';

	require(libList, function(){
		App.router.init('hehe');
	});
});
