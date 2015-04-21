define(['app', 'angularAMD', 'clist/claimlist-controller', 'angular-mocks', ], function (app, angularAMD) {

    // junt test cases for claim list controller
    describe('Claim List Controller Junit Test Cases', function () {

        // Instantiate a new version of my module before each test
        beforeEach(module('app'));

        var ctrl;

        // Before each unit test, instantiate a new instance
        // of the controller
        beforeEach(inject(function ($controller) {
            ctrl = $controller('ClaimListController');
        }));

        // simple junt test case
        it('checks the controller name', function () {
            console.log('Hurray' + ctrl.claimHeader);
        });
    });

});