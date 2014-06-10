'use strict';

angular.module('app')
  .factory('Config', function () {

    var datasources = [
      {
        'name' : 'Northwind Postgres Database',
        'subname' : 'mydb',
        'subprotocol' : 'postgresql',
        'username' : 'postgres',
        'password' : ''
      },
      {
        'name' : 'MySQL Sample Database',
        'subname' : 'mysql',
        'subprotocol' : 'mysql',
        'username' : 'mysql',
        'password' : 'mysql'
      }
    ];

    return {
      datasources: datasources,
      selectedDatasource: datasources[0],
      baseUri: ''
    };
  });
