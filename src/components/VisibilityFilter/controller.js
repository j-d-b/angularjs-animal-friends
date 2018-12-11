export default function () {
  this.toggleFilter = function () {
    this.visibilityFilter = this.visibilityFilter === 'ALL' ? 'FAVORITES' : 'ALL';
  };
};
