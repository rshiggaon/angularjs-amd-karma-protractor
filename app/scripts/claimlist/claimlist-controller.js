define(['app', 'svc/claimlist-service'], function (app) {
    return app.controller('ClaimListController', function (ClaimListService) {
        var self = this;
        self.claimHeader = 'Test - Coming from Cntrl !!!';

        console.log('Inside the controller');

        self.claims = [];

        // Retrieve the claims from the claim service api
        var fetchClaims = function () {
            ClaimListService.getClaims().then(function (resp) {
                self.claims = resp;
            });
        }
        fetchClaims();

        console.log('End of the controller');
    });
});