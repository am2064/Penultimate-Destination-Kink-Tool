'use strict';

describe('Service: kinkList', function () {

  // load the service's module
  beforeEach(module('pendesApp'));

  // instantiate service
  var kinkList;
  beforeEach(inject(function (_kinkList_) {
    kinkList = _kinkList_;
  }));

  it('should do something', function () {
    expect(!!kinkList).toBe(true);
  });

});
