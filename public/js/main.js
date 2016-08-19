requirejs.config({
	baseUrl: 'js/src',
	paths: {
		libs: '../libs',
		jquery: '../libs/jquery/jquery',
		underscore: '../libs/underscore',
		backbone: '../libs/backbone',
		marionette: '../libs/backbone.marionette',
		marionetteConfig: '../libs/marionetteConfig',
		bootstrap: '../libs/bootstrap/bootstrap',
		handlebars: '../libs/handlebars',
		hbs: '../libs/hbs',
		i18nprecompile: '../libs/i18nprecompile',

		router: 'router/appRouter',
		application: '../application',
		templates: 'templates'

	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			depends: ['underscore'],
			exports: 'Backbone'
		},
		'marionette': {
			deps: ['underscore', 'jquery', 'backbone'],
			exports: 'Marionette'
		},

		'marionetteConfig': {
			deps: ['marionette']
		},

		'handlebars': {
			exports: 'Handlebars'
		},

		'bootstrap': ['jquery']
	},
	hbs: {
		templateExtension: 'html',
		disableHelpers: false,
		disableI18n: true,
		compileOptions: {}
	}
});

require(['marionette', 'router', 'application', 'bootstrap', 'marionetteConfig', 'handlebars'], function(Marionette, AppRouter, app) {

	app.addRegions({
		header: '#header',
		content: '#content',
		footer: '#footer'
	});

	var pushState = !!(window.history && window.history.pushState),
		settings = {
			pushState: pushState,
			root: '/ui'
		};

	Backbone.history.start(settings);

});