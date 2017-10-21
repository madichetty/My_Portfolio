(function () {

    var app = angular.module('gemStore', []);
    app.controller('StoreController', function () {
        this.products = gems;

    });
    var gems = [
        {
            ID: '001',
            DemandReference: 'Yes',
            FirstName: 'Sravya',
            LastName: 'Kandagatla',
            Status: 'Done',
            SubStatus: 'InProgress',
            SubmittedOn: '05/12/2016'

        },
        {
            ID: '002',
            DemandReference: 'Yes',
            FirstName: 'Harika',
            LastName: 'Sunkara',
            Status: 'Done',
            SubStatus: 'InProgress',
            SubmittedOn: '05/10/2016'
        },
        {
            ID: '003',
            DemandReference: 'Yes',
            FirstName: 'Sruthin',
            LastName: 'Palla',
            Status: 'Done',
            SubStatus: 'InProgress',
            SubmittedOn: '05/11/2016'
        },
        {
            ID: '002',
            DemandReference: 'Yes',
            FirstName: 'Harika',
            LastName: 'Sunkara',
            Status: 'Done',
            SubStatus: 'InProgress',
            SubmittedOn: '05/10/2016'
        },

    ];
})();