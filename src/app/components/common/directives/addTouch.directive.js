;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.common')
        .directive('addTouchDirective', addTouchDirective);
    addTouchDirective.$inject = [];

    function addTouchDirective() {
        return {
            restrict: "A",
            require: "phonesDirective",
            link: function addTouchDirectiveLinkFunction(scope, element, attrs, phonesDirectiveController) {
                phonesDirectiveController.addTouch();
            }
        }
    }
}(window, angular, undefined));
