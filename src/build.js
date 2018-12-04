({
	baseUrl: '.',
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
	},
    name: "main",
    out: "../dist/main.js"
})