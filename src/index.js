import angular from 'angular';
import nanoid from 'nanoid';

import AddFriend from './components/AddFriend';
import VisibilityFilter from './components/VisibilityFilter';
import Animals from './components/Animals';

const app = angular.module('App', []);

app.controller('MainCtrl', function () {
  this.animals = [];
  this.visibilityFilter = 'ALL';
  this.toggleVisibilityFilter = () => {
    this.visibilityFilter = this.visibilityFilter === 'ALL' ? 'FAVORITES' : 'ALL';
  };
  this.addAnimal = (image, name) => {
    this.animals = [...this.animals, {
      id: nanoid(),
      name,
      image,
      isFavorite: false
    }]
  }
});

app.component('addFriend', AddFriend);
app.component('visibilityFilter', VisibilityFilter);
app.component('animals', Animals);

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['App']));
