(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('app', [
        "oc.lazyLoad",
        'ngRoute',
        'ngAnimate',
        'angular-storage',
        'angular-jwt',
        'auth0',
        'acUtils',
        'acAutocomplete'
    ]).config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/view1'});
        }])
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$http'];
    function AppCtrl($http) {
        var vm = this;

    }

})();
