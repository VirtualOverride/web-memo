(function(){
    'use strict';
    
    var controller = (function(){
    
        function controller(){
            
        }
        
        controller.prototype.select = function(){
             
        };
                
        return controller;     
    })();
    
    var memoList = {
        templateUrl: 'components/memo-list.html',
        bindings: {
            memos: '='
        },  
        controller: controller,
        controllerAs: 'memoList'
    };
    
    angular
        .module('memo')
        .component('memoList', memoList);
})();