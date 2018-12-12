import angular from 'angular';
import AddFriend from './components/AddFriend';
import VisibilityFilter from './components/VisibilityFilter';
import Animals from './components/Animals';

const app = angular.module('App', []);

app.controller('MainCtrl', function () {
  this.animals = [];
  this.visibilityFilter = 'ALL';
});

app.component('addFriend', AddFriend);
app.component('visibilityFilter', VisibilityFilter);
app.component('animals', Animals);

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['App']));
