type CoffeeOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeCoffee(order: CoffeeOrder) {
  console.log(order);
}

function serveCoffee(order: CoffeeOrder) {
  console.log(order);
}

type CoffeRecipe = {
  water: number;
  milk: number;
};

// interface CoffeRecipe {
//   water: number;
//   milk: number;
// }

class Cappuccino implements CoffeRecipe {
  water = 100;
  milk = 50;
}

interface CupSize {
  size: "small" | "large";
}

class Coffee implements CupSize {
  size: "small" | "large" = "large";
}
//for classes use interface

// type Response = { ok: true } | { ok: false };

// class myRes implements Response{
//   ok:boolean = true
// }

type CofeeType = "String" | "Filter" | "Cappuccino"; //literal types

function orderCoffee(t: CofeeType) {
  console.log(t);
}

type BaseCoffee = {
  coffeePowder: number;
};
type Extra = {
  sugar: number;
};

type sweetCoffee = BaseCoffee & Extra;

const cup: sweetCoffee = {
  coffeePowder: 9,
  sugar: 3,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "denzil" };
const u2: User = { username: "denzil", bio: "he is a gorilla" };

type Config = {
  readonly appName: string;
  version: number;
};

const lfg: Config = {
  appName: "yoyo",
  version: 1,
};

// lfg.appName = "hadfha"; //readonly
