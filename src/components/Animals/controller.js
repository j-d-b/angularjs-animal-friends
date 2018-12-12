function AnimalsCtrl() {
  this.toggleFavorite = function(id) {
    const index = this.animals.findIndex(animal => animal.id === id);
    this.animals[index].isFavorite = !this.animals[index].isFavorite;
  };
}

export default AnimalsCtrl;
