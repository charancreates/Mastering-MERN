let subs: number | string = "1M";

let apiRequestStatus: "pending" | "success" | "error" = "pending";

apiRequestStatus = "success";

const orders = ["12", "20", "29", "90"];

// let currentorder; //any means idc (try avoiding any)
let currentorder: string | undefined;

for (let order of orders) {
  if (order === "20") {
    currentorder = order;
    break;
  }
}
console.log(currentorder);
