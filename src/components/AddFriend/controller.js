import nanoid from 'nanoid';

export default function () {
  this.animalImages = ['🐕', '🐈', '🐟', '🐍', '🐖', '🐑', '🐓', '🦔'];
  this.animalImage = '🐕';
  this.animalName = '';
  this.addFriend = function () {
    if (this.animalName) {
      this.animals.push({
        id: nanoid(),
        isFavorite: false,
        image: this.animalImage,
        name: this.animalName
      });
      this.animalName = '';
    }
  };
}
