;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.common')
        .directive('addBatteryDirective', addBatteryDirective);
    addBatteryDirective.$inject = [];

    function addBatteryDirective() {
        return {
            restrict: "A",
            require: "phonesDirective",
            link: function addBatteryDirectiveLinkFunction(scope, element, attrs, phonesDirectiveController) {
                phonesDirectiveController.addBattery();
            }
        }
    }
}(window, angular, undefined));
