interface Coffee {
  flavor: string;
  price: number;
  milk?: boolean;
}

const StrongCoffee = {
  flavor: "nescafe",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "CoffeeWala cafe",
};

//interface create object structres does add data

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

interface ChaiRatings {
  [flavor: string]: number;
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
};

interface User {
  name: string;
}
//interface merge them
interface User {
  age: number;
}

const u: User = {
  name: "Idk",
  age: 80,
};

interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {}
