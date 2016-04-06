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
        'acUtils'
    ]).config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/view1'});
        }])
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$http'];
    function AppCtrl($http) {
        var vm = this;
        vm.get = function () {
            $http.get('usuarios.php?function=get')
                .success(function (data) {
                        console.log(data);
                    }
                )
                .error(function (data) {
                        console.log(data);
                    }
                );
        };
        vm.post = function () {
            $http.post('usuarios.php',{'function':'post', 'param':'prueba'})
                .success(function (data) {
                        console.log(data);
                    }
                )
                .error(function (data) {
                        console.log(data);
                    }
                );
        }
    }

})();
