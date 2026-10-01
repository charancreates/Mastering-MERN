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
let coffee;
coffee = {
    name: "filter",
    price: 90,
    isHot: true,
};
const StrongCoffee = {
    name: "strong coffee",
    price: 99,
    ingredients: ["milk", "coffee powder"],
};
let smallCup = {
    size: "200ml",
};
let bigCup = {
    size: "200ml",
    material: "steel",
};
smallCup = bigCup;
const newCoffee = {
    brewTime: 5,
    beans: "Arabica",
};
const chaiBrew = newCoffee;
const u = {
    username: "aye",
    password: "123",
};
const updateChai = (updates) => {
    console.log("updating chai with ", updates);
};
updateChai({ price: 24 });
updateChai({ isHot: false });
updateChai({}); //can pass emptpy so beware
let placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "idk",
    quantity: 89,
});
const pikachu = {
    name: "pikachu",
    level: 100,
};
export {};
//# sourceMappingURL=objectTs.js.map