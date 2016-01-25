'use strict';

/**
 * @ngdoc overview
 * @name pendesApp
 * @description
 * # pendesApp
 *
 * Main module of the application.
 */
angular
.module('pendesApp', [
	'ngTouch',
	'ui.bootstrap',
	'ngStorage'
])
.config(
	function ($localStorageProvider) {
		$localStorageProvider.setKeyPrefix('KinkMachinePenDes');
		$localStorageProvider.set('kinkArray', {});
	}
);
