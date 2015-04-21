define(['angularAMD'], function (angularAMD) {

    var app = angular.module('app', ['ngRoute']);

    /**
     * Configure Angular ngApp with route and cache the needed providers
     */
    app.config(['$routeProvider', function ($routeProvider) {

        // Place different routers as required by the application
        $routeProvider
            .when("/claim", angularAMD.route({
                templateUrl: 'scripts/claimlist/claimlist-view.html',
                controllerUrl: 'claimlist/claimlist-controller'
            })).otherwise({
                redirectTo: '/claim'
            })

    }]);

    // Bootstrap Angular when DOM is ready
    return angularAMD.bootstrap(app);
});