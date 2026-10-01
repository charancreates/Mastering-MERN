const pokemon = {
  name: "pikachu",
  level: 30,
  is_mega: false,
};

// {
//     name:string;
//     level:number;
//     is_mega:boolean;
// }

let coffee: {
  name: string;
  price: number;
  isHot: boolean;
};

coffee = {
  name: "filter",
  price: 90,
  isHot: true,
};

type Coffee = {
  name: string;
  price: number;
  ingredients: string[];
};

const StrongCoffee: Coffee = {
  name: "strong coffee",
  price: 99,
  ingredients: ["milk", "coffee powder"],
};

//duck typing
type Cup = { size: string };
let smallCup: Cup = {
  size: "200ml",
};
let bigCup = {
  size: "200ml",
  material: "steel",
};

smallCup = bigCup;
// bigCup = smallCup;

type Brew = {
  brewTime: number;
};
const newCoffee = {
  brewTime: 5,
  beans: "Arabica",
};

const chaiBrew: Brew = newCoffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "aye",
  password: "123",
};

type Item = { name: string; quanitiy: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("updating chai with ", updates);
};

updateChai({ price: 24 });
updateChai({ isHot: false });
updateChai({}); //can pass emptpy so beware

type ChairOrder = {
  name?: string;
  quantity?: number;
};

let placeOrder = (order: Required<ChairOrder>) => {
  console.log(order);
};

placeOrder({
  name: "idk",
  quantity: 89,
});

type Pokemon = {
  name: string;
  level: number;
  is_mega: boolean;
  type: string[];
};

//precisely pick
type BasePokemon = Pick<Pokemon, "name" | "level">;

const pikachu: BasePokemon = {
  name: "pikachu",
  level: 100,
};

type newPokemon = {
  name: string;
  level: number;
  is_mega: boolean;
  hidden_abilities: string;
};

type PublicPokemon = Omit<newPokemon, "hidden_abilities">;
