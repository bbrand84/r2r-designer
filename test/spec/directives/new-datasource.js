'use strict';

describe('Directive: newDatasource', function () {

  // load the directive's module
  beforeEach(module('r2rDesignerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<new-datasource></new-datasource>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the newDatasource directive');
  }));
});
