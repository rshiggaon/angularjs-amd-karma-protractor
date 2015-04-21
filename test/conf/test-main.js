// need more work to load dynamically all the test files
var allTestFiles = ['/base/test/unit/claimlist/claimlist-controller_Spec.js'];

// Create basic requirejs config
require.config({
    // The baseUrl depends on what is defined in karma.unit.js:basePath
    baseUrl: "/base",

    // alias libraries paths
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-route': 'bower_components/angular-route/angular-route',
        'angular-mocks': 'bower_components/angular-mocks/angular-mocks',
        'angularAMD': 'bower_components/angularAMD/angularAMD',
        'jquery': 'bower_components/jquery/dist/jquery',
        'clist': 'app/scripts/claimlist',
        'cdetail': 'app/scripts/claimdetail',
        'compo': 'app/scripts/components',
        'svc': 'app/scripts/components/services',
        'app': 'app/scripts/app'
    },

    shim: {
        'app': {
            deps: ['angular', 'angularAMD', 'angular-route']
        },
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'angular-mocks': ['angular']
    },

    // dynamically load all test files
    deps: allTestFiles,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});