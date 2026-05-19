import fs from "fs";
import path from "path";

fs.readFile("idk.txt", "utf-8", (err, data) => {
  if (err) throw err;
  const modified = data + "\n\t\t\t - modified by charan";
  fs.writeFile("modified.txt", modified, (err) => {
    if (err) throw err;
    console.log("modification successful");
    console.log(path.resolve("idk.txt"));
    console.log(path.resolve("modified.txt"));
  });
});
