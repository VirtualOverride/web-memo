(function(){
    'use strict';
    
    var controller = (function(){
        var memoService, vm;
        
        controller.$inject = ['MemoService'];
        
        function controller(MemoService){
            memoService = MemoService;
            vm = this;
            
            memoService.get()
			  	.success(function(data, status, headers, config){
					vm.memos = data.memos;
			  	})
				.error(function(data, status, headers, config){
			  	   	console.log(data);
			  	});
        }
        
        return controller;
    })();
    
    var webMemo = {
        templateUrl: 'app.html',
        bindings: {},
        controller: controller,
        controllerAs: 'memo'   
    };
    
    angular
        .module('memo', [])
        .component('webMemo', webMemo);
})();