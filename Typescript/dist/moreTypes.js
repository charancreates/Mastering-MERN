import { validateLibraryUrl } from "@excalidraw/excalidraw/data/library";
let response = "42";
let numericLength = response.length;
let bookString = '{"name":"Deep work"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject.name);
//type assertion
const inputElement = document.getElementById("username");
let value;
value = "pikachu";
value = [1, 2, 3];
value = 2.4;
value.toUpperCase();
let nvalue;
nvalue = "pikachu";
nvalue = [1, 2, 3];
nvalue = 2.4;
if (typeof nvalue === "string") {
    nvalue.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}
const data = "idk what is it";
const strData = data; //env vars as forcefully
function RBAC(role) {
    if (role === "admin") {
        console.log(`Rediricting to admin dashboard`);
        return;
    }
    if (role === "user") {
        console.log(`Rediricting to user dashboard`);
        return;
    }
    role;
}
function neverReturn() {
    while (true) { }
}
//# sourceMappingURL=moreTypes.js.map