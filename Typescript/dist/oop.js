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
    flavor = "ginger";
    secretIngredients = "Chocolate";
    reveal() {
        return this.secretIngredients;
    }
}
const c = new Chai();
c.reveal();
class Shop {
    shopName = "Corner house";
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
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
//controlled gates(getter , setter)
class Coffee {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("Too sweet");
        this._sugar = value;
    }
}
const c1 = new Coffee();
c1.sugar = 8;
class EkChai {
    flavor;
    static shopName = "malum nahi";
    constructor(flavor) {
        this.flavor = flavor;
    }
}
console.log(EkChai.shopName);
class Drink {
}
class MyChai extends Drink {
    make() {
        console.log("Brewing chai");
    }
}
//composition
class Heater {
    heat() { }
}
class CoffeeMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
export {};
//# sourceMappingURL=oop.js.map