const pokemonTypes: string[] = ["fire", "water", "grass", "electric"];
const pokemonLevel: number[] = [10, 20, 25];

const rating: Array<number> = [4.5, 5.0];

type Coffee = {
  name: string;
  price: number;
};

const menu: Coffee[] = [
  { name: "black coffee", price: 78 },
  { name: "normal coffee", price: 79 },
];

//cant push
const cities: readonly string[] = ["delhi", "bengaluru"];

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let chaiTuple: [string, number];
chaiTuple = ["masala", 78];

let userInfo: [string, number, boolean?];
userInfo = ["charan", 89];
userInfo = ["charan", 89, false];

const location: readonly [number, number] = [23.45, 26.27];

//named touples
const chaiItems: [name: string, price: number] = ["masala", 89];

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}
const size = CupSize.LARGE;

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER);

enum RandomEnum {
  ID = 1,
  NAME = "chai", //not standard
}
