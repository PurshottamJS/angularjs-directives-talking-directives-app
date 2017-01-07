;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.common')
        .directive('phonesDirective', phonesDirective);
    phonesDirective.$inject = [];

    function phonesDirective() {
        return {
            scope : {},//Necesary for reusable component
            restrict: "E",
            controllerAs: "phonesDirectiveController",
            controller: function phonesDirectiveController() {
                var vm = this;
                vm.features = [];
                vm.addCamera = function addCamera() {
                    vm.features.push("camera")
                }
                vm.addTouch = function addTouch() {
                    vm.features.push("touch")
                }
                vm.addBattery = function addBattery() {
                    vm.features.push("battery")
                }
            },
            link: function phonesDirectiveLinkFunction(scope, element) {
                element.bind("click", function onPhonesDirectiveClick() {
                    alert(scope.phonesDirectiveController.features)
                })
            }
        }
    }
}(window, angular, undefined));
