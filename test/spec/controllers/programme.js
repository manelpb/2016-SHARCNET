'use strict';

describe('Controller: ProgrammeCtrl', function () {

  // load the controller's module
  beforeEach(module('sharcnet2016App'));

  var ProgrammeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProgrammeCtrl = $controller('ProgrammeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProgrammeCtrl.awesomeThings.length).toBe(3);
  });
});
