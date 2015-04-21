require.config({
    baseUrl: 'scripts',

    // alias libraries paths
    paths: {
        'angular': '/bower_components/angular/angular',
        'angular-route': '/bower_components/angular-route/angular-route',
        'angularAMD': '/bower_components/angularAMD/angularAMD',
        'jquery': '/bower_components/jquery/dist/jquery',
        'clist': 'claimlist',
        'cdetail': 'claimdetail',
        'compo': 'components',
        'svc': 'components/services'
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'app': {
            deps: ['angular', 'angularAMD', 'angular-route']
        },
        'angular-route': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        }
    },

    // kick start application
    deps: ['app']
});