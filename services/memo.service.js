(function(){
    'use strict';
    
    var memoService = (function(){
        var http;
        
        memoService.$inject = ['$http'];
        
        function memoService($http){
            http = $http;
        }
        
        memoService.prototype.get = function() {
            return http.get('memos.json');
        };
        
        return memoService;
    })();
    
    angular
        .module('web-memo')
        .service('MemoService', memoService);
})();