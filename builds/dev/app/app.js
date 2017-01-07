;
(function(window, angular, undefined) {
    'use strict';
    angular.module('app', ['app.common'])
}(window, angular, undefined));
;
(function(window, angular, undefined) {
    'use strict';
    angular.module('app.common', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
}(window, angular, undefined));

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
