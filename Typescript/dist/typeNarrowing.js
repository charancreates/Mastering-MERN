import { Switch } from "@excalidraw/excalidraw/components/Switch";
function getCoffee(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} coffee...`;
    }
    return `Coffee order ${kind}`;
}
function serverCoffee(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default thing`;
}
console.log(serverCoffee("Cappuccino"));
console.log(serverCoffee());
//exhaustic check
function orderCoffee(size) {
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
function write(obj) {
    if (obj instanceof pen) {
        return obj.write();
    }
}
function isCoffeeOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.type === "number");
}
function serveOrder(item) {
    if (isCoffeeOrder(item)) {
        return `Serving ${item.type} coffee with
        ${item.sugar}`;
    }
    return `Serving custom coffee ${item}`;
}
function MakeCoffee(order) {
    switch (order.type) {
        case "Black":
            return "You need black coffee";
        case "Cappuccino":
            return "You need Cappuccino coffee";
        case "Strong":
            return "You need Strong coffee";
    }
}
function brew(order) {
    if ("sugar" in order) {
        order.sugar = 30;
    }
}
// function isStringArray(arr:unknown):arr is string[]{
// }
//# sourceMappingURL=typeNarrowing.js.map