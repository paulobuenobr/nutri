/**
 * Created by paulob on 30/10/2015.
 */

// public/js/directives/diretivas.js

angular.module('diretivas', [])
    .directive('painelImagens', function() {
        var ddo = {};
        ddo.restrict = "AE";
        ddo.scope = {
          titulo: '@'
        };
        ddo.template = 'js/directives/painel-imagens.html';
        return ddo;
});