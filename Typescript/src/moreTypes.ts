import { validateLibraryUrl } from "@excalidraw/excalidraw/data/library";

let response: any = "42";

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name":"Deep work"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

//type assertion
const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;

value = "pikachu";
value = [1, 2, 3];
value = 2.4;
value.toUpperCase();

let nvalue: unknown;

nvalue = "pikachu";
nvalue = [1, 2, 3];
nvalue = 2.4;

if (typeof nvalue === "string") {
  nvalue.toUpperCase();
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "idk what is it";
const strData: string = data as string; //env vars as forcefully

type Role = "admin" | "user" | "superadmin";

function RBAC(role: Role): void {
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

function neverReturn(): never {
  while (true) {}
}
