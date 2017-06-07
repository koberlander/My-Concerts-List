angular.module('NoteWrangler').config(function($routeProvider){
  $routeProvider
  .when('/', {
    redirectTo: '/notes'
  })

  .when('/notes', {
    templateUrl: 'assets/templates/notes/index.html',
    controller: 'NotesIndexController'
  })

  .when('/new', {
    templateUrlv: 'assets/templates/notes/new.html',
    controller: 'NotesCreateController'
  })

  .when('/delete', {
    templateUrl: 'assets/templates/notes/index.html',
    controller: 'NotesDeleteController'
  })

  .when('/:id', {
    templateUrl: 'assets/templates/notes/index.html',
    controller: 'NotesShowController'
  })

  .when('/:id/edit', {
    templateUrl: 'assets/templates/notes/edit.html',
    controller: 'NotesEditController'
  })

  .when('/users', {
    templateUrl: 'assets/templates/users/index.html',
    controller: 'UserIndexController'
  })

  .when('/users/:id', {
    templateUrl: 'assets/templates/users/show.html',
    controller: 'UserShowController'
  })
});
