    'use strict';
    /* */
    /* */
    // Register `testList` component, along with its associated controller and template
    angular.
      module('stringList').
      component('stringList', {
        templateUrl: '/string-list/string-list.template.html',
        controller: ['$http', '$scope',
          function stringListController($http,$scope) {
             
              var vm = this; 

             
             
          }
        ]
      });
