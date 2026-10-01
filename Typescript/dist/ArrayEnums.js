const pokemonTypes = ["fire", "water", "grass", "electric"];
const pokemonLevel = [10, 20, 25];
const rating = [4.5, 5.0];
const menu = [
    { name: "black coffee", price: 78 },
    { name: "normal coffee", price: 79 },
];
//cant push
const cities = ["delhi", "bengaluru"];
const table = [
    [1, 2, 3],
    [4, 5, 6],
];
let chaiTuple;
chaiTuple = ["masala", 78];
let userInfo;
userInfo = ["charan", 89];
userInfo = ["charan", 89, false];
const location = [23.45, 26.27];
//named touples
const chaiItems = ["masala", 89];
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.LARGE;
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making: ${type}`);
}
makeChai(ChaiType.GINGER);
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["ID"] = 1] = "ID";
    RandomEnum["NAME"] = "chai";
})(RandomEnum || (RandomEnum = {}));
export {};
//# sourceMappingURL=ArrayEnums.js.map