//generics are templates, code resuseable
function wrapInArray(item) {
    return [item];
}
wrapInArray("masala");
wrapInArray(24324);
wrapInArray(true);
wrapInArray({ flavor: "ginger" });
function pair(a, b) {
    return [a, b];
}
pair("pikachu", "pika");
pair("pikachu", 100);
pair("pikachu", false);
pair("pikachu", { type: "electric" });
const numberBox = {
    content: 10,
};
const numberBox2 = {
    content: "10",
};
const res = {
    status: 200,
    data: { flavor: "chocolate" },
};
export {};
//# sourceMappingURL=generic.js.map