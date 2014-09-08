require.config({

	packages: [
    	{
    		name: 'app',
    		location: 'components/app'
    	},
    	{
    		name: 'common',
    		location: 'components/common'
    	},
    	{
    		name: 'mymodule',
    		location: 'components/mymodule'
    	}
    ],
    paths: {
        angular: './lib/angular',
        ngRoute: './lib/angular-route',
        kendo : [ 'http://cdn.kendostatic.com/2014.1.416/js/kendo.all.min', './lib/kendo.all.min' ],
        jquery: ['http://code.jquery.com/jquery-1.9.1.min', './lib/jquery-1.9.1.min'],
        // text: './lib/text'
        // kendoAngular: ['http://kendo-labs.github.io/angular-kendo/angular-kendo', './lib/angular-kendo']

        // kendo: './lib/kendo.all.min',
        // jquery: './lib/jquery-2.1.1.min'
        // kendoAngular: './lib/angular-kendo'
    },
	shim: {
			angular : {
				deps: ['jquery'],
				exports: 'angular'
			},
			ngRoute: {
		      deps:     ['angular']
		    },
		    kendo: {
		    	deps: ['angular']
		    }
	}
});


require(['bundles/anglib'], 
	function () { 
		require(['bundles/app'], 
			function () { 

				//loading when bootstrap called
				require(['bundles/lib']);

				angular.element().ready(function() {
					angular.bootstrap(document, ['app']);
				}); 
			});
});