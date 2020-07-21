class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    // console.log("hola", this.length)
    this.length++
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds');
    }
    return this.items.indexOf(pos)
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    return Math.min(...this.items)
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    }

    return this.items.reduce((acc, curr) => acc + curr);

  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.sum() / this.items.length

  }
}

module.exports = SortedList;