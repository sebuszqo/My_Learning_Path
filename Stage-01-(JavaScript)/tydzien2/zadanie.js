class champions {
  constructor(medals) {
    this.medals = [];
  }

  add(newMedal) {
    return this.medals.push(newMedal);
  }

  check() {
    for (let i = 0; i < this.medals.length; i++) {
      if (this.medals[i] === 1) {
        console.log('Super, udalo sie');
      } else {
        console.log('nie masz medalu sorry');
      }
      break;
    }
  }
}

const poland = new champions();
const germany = new champions();
germany.add(2);
germany.add(3);
poland.add(2);
poland.add(3);
poland.add(2);
poland.add(1);
// poland.check();
germany.check();
