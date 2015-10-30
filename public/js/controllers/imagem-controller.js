/**
 * Created by paulob on 28/10/2015.
 */
// public/imagem-controller.js

angular.module('nutri').controller('ImagemController', function($scope, $http) {
    $scope.imagens = [];
    $scope.filtro = '';
    $http.get('/v1/imagens')
        .success(function(retorno) {
            console.log(retorno);
            $scope.imagens = retorno; // não precisa fazer retorno.data
        })
        .error(function(erro) {
            console.log(erro);
        });
});
