import nanoid from 'nanoid';

function addFriendCtrl() {
  this.animalImages = ['🐕', '🐈', '🐟', '🐍', '🐖', '🐑', '🐓', '🦔'];
  this.animalImage = '🐕';
  this.animalName = '';
  this.addFriend = function () {
    if (this.animalName) {
      this.animals = [
        ...this.animals,
        {
          id: nanoid(),
          isFavorite: false,
          image: this.animalImage,
          name: this.animalName
        }
      ];
      this.animalName = '';
    }
  };
}

export default addFriendCtrl;
