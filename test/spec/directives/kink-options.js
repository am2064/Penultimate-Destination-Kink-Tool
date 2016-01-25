'use strict';

describe('Directive: kinkOptions', function () {

  // load the directive's module
  beforeEach(module('pendesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<kink-options></kink-options>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the kinkOptions directive');
  }));
});
