import { Switch } from "@excalidraw/excalidraw/components/Switch";

function getCoffee(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} coffee...`;
  }
  return `Coffee order ${kind}`;
}

function serverCoffee(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default thing`;
}
console.log(serverCoffee("Cappuccino"));
console.log(serverCoffee());

//exhaustic check
function orderCoffee(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return "tiny coffee";
  }
  if (size === "medium" || size === "large") {
    return "make extra coffee";
  }
  return `coffee order${size}`;
}

class pen {
  write() {
    return `i write with pen`;
  }
}
class pencil {
  write() {
    return `i write with pencil`;
  }
}

function write(obj: pen | pencil) {
  if (obj instanceof pen) {
    return obj.write();
  }
}

//custom types
type CoffeeOrder = {
  type: string;
  sugar: number;
};

function isCoffeeOrder(obj: any): obj is CoffeeOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.type === "number"
  );
}

function serveOrder(item: CoffeeOrder | string) {
  if (isCoffeeOrder(item)) {
    return `Serving ${item.type} coffee with
        ${item.sugar}`;
  }
  return `Serving custom coffee ${item}`;
}

type Cappuccino = {
  type: "Cappuccino";
  sugar: number;
};
type BlackCoffee = {
  type: "Black";
  sugar: number;
};
type StrongCoffee = {
  type: "Strong";
  strongness: number;
};
type FilterCoffee = {
  type: "Filter";
  aroma: number;
};

type coffee = Cappuccino | BlackCoffee | StrongCoffee | FilterCoffee;

function MakeCoffee(order: coffee) {
  switch (order.type) {
    case "Black":
      return "You need black coffee";
    case "Cappuccino":
      return "You need Cappuccino coffee";
    case "Strong":
      return "You need Strong coffee";
  }
}

function brew(order: Cappuccino | FilterCoffee) {
  if ("sugar" in order) {
    order.sugar = 30;
  }
}

// function isStringArray(arr:unknown):arr is string[]{

// }
