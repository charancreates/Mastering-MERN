// class Chai {
//   flavor: string;
//   price: number;

//   //   constructor(flavour: string, price: number) {
//   //     this.flavor = flavour;
//   //     this.price = price;
//   //   }
//   constructor(flavour: string) {
//     this.flavor = flavour;
//     console.log(this);
//   }
// }

// const masalaChai = new Chai("masala");
// masalaChai.flavor = "ginger";

//access modifiers
class Chai {
  public flavor: string = "ginger";

  private secretIngredients = "Chocolate";

  reveal() {
    return this.secretIngredients;
  }
}

const c = new Chai();
c.reveal();

class Shop {
  protected shopName = "Corner house";
}

class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}

new Branch().getName;

class Wallet {
  #balance = 100;
  getBalance() {
    return this.#balance;
  }
}
const w = new Wallet();
w.getBalance();

class Cup {
  readonly capacity: number = 250;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

//controlled gates(getter , setter)

class Coffee {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }
  set sugar(value: number) {
    if (value > 5) throw new Error("Too sweet");
    this._sugar = value;
  }
}

const c1 = new Coffee();
c1.sugar = 8;

class EkChai {
  static shopName = "malum nahi";

  constructor(public flavor: string) {}
}
console.log(EkChai.shopName);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make(): void {
    console.log("Brewing chai");
  }
}

//composition

class Heater {
  heat() {}
}

class CoffeeMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}
