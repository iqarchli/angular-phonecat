    'use strict';
    /* */
    /* */
    // Register `testList` component, along with its associated controller and template
    angular.
      module('testList').
      component('testList', {
        templateUrl: 'test-list/test-list.template.html',
        controller: ['Phone','$http', '$scope',
          function TestListController(Phone,$http,$scope) {
              
              var vm = this; 

              vm.data="";
              length =6 ;
              console.log("been activated");
              length = vm.test;
              vm.rand = function(length) {
              vm.result           = '';
              var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
              var charactersLength = characters.length;
              for ( var i = 0; i < length; i++ ) {
                  vm.result += characters.charAt(Math.floor(Math.random() * charactersLength));
               }
                
               console.log(vm.result);
             
             };
              
              
           


          //  this.phones = Phone.query();
         //   this.orderProp = 'age';
          }
        ]
      });
