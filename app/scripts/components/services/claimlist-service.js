define(['app'], function (app) {
    app.service('ClaimListService', ['$q', function ($q) {
        var claims = [
            {
                id: 1,
                claimNumber: 'claimNumber 1'
            },
            {
                id: 2,
                claimNumber: 'claimNumber 2'
            }
        ];

        return {
            // returns a list of claims
            getClaims: function () {
                console.log("Fetching claims from the service");
                var deferred = $q.defer();
                // for now hard coded the claims just for quick reference
                deferred.resolve(claims);
                return deferred.promise;
            }
        };
}]);
});