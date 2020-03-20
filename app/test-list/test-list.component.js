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

              vm.columns = [{ field: 'name' }, { field: 'gender' }];
              vm.gridOptions = {
                enableSorting: true,
                columnDefs: vm.columns,
                onRegisterApi: function(gridApi) {
                  vm.gridApi = gridApi;
                }
              };
            
              vm.remove = function() {
              vm.columns.splice($scope.columns.length-1, 1);
              };

              vm.add = function() {
              vm.columns.push({ field: 'company', enableSorting: false });
              };

              vm.unsplice = function() {
              vm.columns.splice(1, 1);
              };
 
              vm.toggleDisplayName = function() {
                if( vm.columns[1].displayName === 'GENDER' ){
                  vm.columns[1].displayName = 'Gender';
                } else {
                  vm.columns[1].displayName = 'GENDER';
                }
                vm.gridApi.core.notifyDataChange( uiGridConstants.dataChange.COLUMN );
              };
 
              vm.toggleVisible = function() {
                var firstColumn = vm.gridApi.grid.columns[0];

                if (firstColumn.visible) {
                  firstColumn.hideColumn();
                } else {
                  firstColumn.showColumn();
                }
                vm.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
              };
 
              $http.get('/data/100.json')
                .then(function(response) {
                  vm.gridOptions.data = response.data;
                });
 
              $scope.$on('$destroy', function() {
                vm.gridApi = null;
              });

              console.log("been activated");




          //  this.phones = Phone.query();
         //   this.orderProp = 'age';
          }
        ]
      });
