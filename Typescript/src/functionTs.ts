function makeCoffee(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeCoffee("Black Coffee", 7);

function getPrice(): number {
  return 67;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logger(): void {
  console.log(`yoyo `);
}

// function orederCoffee(type?:string){

// }
function orederCoffee(type: string = "coffee") {}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
