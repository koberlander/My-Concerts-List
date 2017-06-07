angular.module('NoteWrangler').config(function($routeProvider){
  $routeProvider.when('/'), {
    redirectTo: '/notes'
  })
  $routeProvider.when('/notes'), {
    templateUrl: 'assets/templates/notes/index.html',
    controller: 'NotesIndexController'
  })
  $routeProvider.when('/new'), {
    templateUrl: 'assets/templates/notes/new.html',
    controller: 'NotesCreateController'
  })
  $routeProvider.when('/delete'), {
    templateUrl: 'assets/templates/notes/index.html',
    controller: 'NotesDeleteController'
  })
  $routeProvider.when('/:id'), {
    templateUrl: 'assets/templates/notes/index.html',
    controller: 'NotesShowController'
  })
  $routeProvider.when('/:id/edit'), {
    templateUrl: 'assets/templates/notes/edit.html',
    controller: 'NotesEditController'
  });
});
