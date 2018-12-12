import nanoid from 'nanoid';
import template from './template.html';

export default {
  bindings: {
    addAnimal: '&'
  },
  controller: function() {
    this.animalImages = ['🐕', '🐈', '🐟', '🐍', '🐖', '🐑', '🐓', '🦔'];
    this.animalImage = '🐕';
    this.animalName = '';
    this.addFriend = () => {
      if (this.animalName) {
        this.addAnimal({ image: this.animalImage, name: this.animalName });
        this.animalName = '';
      }
    };
  },
  template
};
