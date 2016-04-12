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
    ]).config(['$routeProvider', 'authProvider', function ($routeProvider, authProvider) {
            authProvider.init({
                domain: 'ac-desarrollos.auth0.com',
                clientID: 'su5JUmdUk52EWhfK5xxZJtnw6W3IK9c1',
                loginUrl: '/ingreso'
            });

        $routeProvider.when('/main', {
                templateUrl: 'main/main.html',
                controller: 'MainController',
                data: {requiresLogin: false},
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load('main/main.js');
                    }]
                }
            });
        }])
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$http'];
    function AppCtrl($http) {
        var vm = this;

    }

})();
