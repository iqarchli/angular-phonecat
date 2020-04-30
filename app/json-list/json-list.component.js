    'use strict';
    /* */
    /* */
    // Register `testList` component, along with its associated controller and template
    angular.
      module('jsonList').
      component('jsonList', {
        templateUrl: '/json-list/json-list.template.html',
        controller: ['$http', '$scope',
                    
          function jsonListController($http,$scope) {
              
             /*
              
              
              debugger;
              
              var json_s = generateRandomJson(2);
             dummyjson.parse(template); // Returns a string
              //console.log(result);
              vm.json_output = "output!";
             // vm.json_output = JSON.stringify(json_s, undefined, 2);
             // vm.json_output = JSON.JSONprettyPrint(json_s);
              //JSON.stringify(vm.json_output);
              // Code starts here//
             
              function generateRandomJson (maxDepth) {
                    var choices = ["number", "string", "boolean", "array", "object"];
                  
                    if (maxDepth == 0) {
                        choices = ["number", "string", "boolean"];
                    }

                    var choice = chooseOne(choices);

                    function chooseOne(choices) {
                        return choices[parseInt(Math.random()*choices.length)];
                       
                    }
                    
                    if (choice == "number") {
                        return generateRandomNumber();
                    }
                    if (choice == "string") {
                        return generateRandomString();
                    }
                    if (choice == "boolean") {
                        return generateRandomBoolean();
                    }
                    if (choice == "array") {
                        return generateRandomArray();
                    }
                    if (choice == "object") {
                        return generateRandomObject();
                    }

                    function generateRandomNumber () {
                        var maxNum = 2**32;
                        var number = Math.random()*maxNum;
                        var isInteger = chooseOne([true,false]);
                        var isNegative = chooseOne([true,false]);

                        if (isInteger) number = parseInt(number);
                        if (isNegative) number = -number;

                        return number;
                    }

                    function generateRandomString () {
                        var alphabet = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

                        var maxLength = 100;
                        var length = Math.random()*maxLength;
                        var string = "";
                        for (var i = 0; i < length; i++) {
                            string += chooseOne(alphabet);
                        }

                        return string;
                    } 

                    function generateRandomBoolean () {
                        return chooseOne([true,false]);
                    }

                    function generateRandomArray () {
                        var maxArrayLength = 10;
                        var length = parseInt(Math.random()*maxArrayLength);

                        var array = [];  
                        for (var i = 0; i < length; i++) {
                            array[i] = generateRandomJson(maxDepth-1);
                        }

                        return array;
                    }

                    function generateRandomObject () {
                        var maxObjectKeys = 10;
                        var keyCount = parseInt(Math.random()*maxObjectKeys);

                        var object = {};  
                        for (var i = 0; i < keyCount; i++) {
                            var key = generateRandomKeyName();
                            object[key] = generateRandomJson(maxDepth-1);
                        }

                        return object;
                    }

                    function generateRandomKeyName () {
                        var maxKeyLength = 10;
                        var keyLength = 1 + parseInt(Math.random()*maxKeyLength);
                        var randomString = generateRandomString();
                        return randomString.substr(0,keyLength)
                    }
                }*/ 
             //code ends here 
          }
        ]
      });
