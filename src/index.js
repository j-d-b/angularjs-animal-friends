import angular from 'angular';
import AddFriend from './components/AddFriend';
import Animals from './components/Animals';

const app = angular.module('App', []);

app.controller('MainCtrl', function () {
  this.animals = [];
});

app.component('addFriend', AddFriend);
app.component('animals', Animals);

document.addEventListener('DOMContentLoaded', function () {
	angular.bootstrap(document, ['App']);
});
