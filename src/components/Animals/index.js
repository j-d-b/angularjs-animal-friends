import styles from './styles.css';
import template from './template.html';

function getVisibleAnimals(animals, filter) {
  return filter === 'FAVORITES'
    ? animals.filter(({ isFavorite }) => isFavorite)
    : animals;
}

export default {
  bindings: {
    animals: '<',
    visibilityFilter: '<'
  },
  controller: function() {
    this.$onChanges = function(changes) {
      if (changes.visibilityFilter) {
        this.visibleAnimals = getVisibleAnimals(this.animals, changes.visibilityFilter.currentValue);
      }
      if (changes.animals) {
        this.visibleAnimals = getVisibleAnimals(changes.animals.currentValue, this.visibilityFilter);
      }
    };
    this.toggleFavorite = function(id) {
      const index = this.animals.findIndex(animal => animal.id === id);
      this.animals[index].isFavorite = !this.animals[index].isFavorite;
    };
  },
  template
};
