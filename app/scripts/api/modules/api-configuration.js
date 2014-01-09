'use strict';

////////////////////////////////////////////////////////////////////////////
// COMMON API - 0.1
// CONFIGURATION
// PRIMARY MODULE (AppConfiguration)
////////////////////////////////////////////////////////////////////////////
// It includes constants for all the common API components.
////////////////////////////////////////////////////////////////////////////
//
angular.module('AppConfiguration', ['AppDetection'])

.run(['$log',
    function ($log) {

        $log.info('AppConfiguration run');
    }]);
