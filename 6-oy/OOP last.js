// 1-misol
class AddUp {
  constructor(n) {
    this.n = n;
  }

  getResult() {
    let sum = 0;
    for (let i = 1; i <= this.n; i++) {
      sum += i;
    }
    return sum;
  }
}

const ex1 = new AddUp(4);
console.log(ex1.getResult()); // 10

// 2-misol
class SortByLength {
  constructor(arr) {
    this.arr = arr;
  }

  getSorted() {
    return this.arr.sort((a, b) => a.length - b.length);
  }
}

const ex2 = new SortByLength(["apple", "hi", "car"]);
console.log(ex2.getSorted());

// 3-misol
class LargestEven {
  constructor(arr) {
    this.arr = arr;
  }

  getLargestEven() {
    let evens = this.arr.filter(num => num % 2 === 0);
    return evens.length ? Math.max(...evens) : -1;
  }
}

const ex3 = new LargestEven([3, 7, 8, 2]);
console.log(ex3.getLargestEven()); // 8
// 4-misol
class TypingGame {
  constructor(correct, typed) {
    this.correct = correct;
    this.typed = typed;
  }

  check() {
    return this.typed.map((word, i) =>
      word === this.correct[i] ? 1 : -1
    );
  }
}

const ex4 = new TypingGame(["cat", "blue", "skt"], ["cat", "blu", "skt"]);
console.log(ex4.check()); 

// 5-misol
class VoteCount {
  constructor(upvotes, downvotes) {
    this.upvotes = upvotes;
    this.downvotes = downvotes;
  }

  getResult() {
    return this.upvotes - this.downvotes;
  }
}

const ex5 = new VoteCount(10, 3);
console.log(ex5.getResult()); // 7
