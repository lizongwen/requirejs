require.config({
	baseUrl: '/src',
	paths: {
		// 自定义公共JS
		'common': 'static/js/common',
		// 类库公共JS
		"jquery": "static/libs/jquery/jquery-3.2.1.min",
		"bootstrap": "static/libs/bootstrap/bootstrap.min",

	},
	shim: {
		"common": {
			deps: ['jquery']
		},
		"jquery": {
			exports: 'jquery'
		},
		'bootstrap': {
			deps: ['jquery']
		}
	}
});

var config = requirejs.s.contexts._.config.config;
console.log(requirejs.s.contexts._.config)


require(['jquery', 'bootstrap', 'common'], function ($, undefined) {
	require(['static/js/' + config.name], function (control) {
		control['init']();
	})
})