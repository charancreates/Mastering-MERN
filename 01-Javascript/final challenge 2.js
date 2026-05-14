async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    // console.log(data[0].completed);
    const completed = data.filter((todo) => todo.completed);
    const maps = data.map((todo) => todo.title);
    const Ccount = data.reduce((count, todo) => {
      if (todo.completed) {
        return count + 1;
      }
      return count;
    }, 0);
    const first = data.find((todo) => todo.completed);
    const firstI = data.findIndex(
      (todo) => (todo.title = "vero rerum temporibus dolor")
    );

    const check5 = data.some((todo) => todo.userId == 5);
    const checktitle = data.every((todo) => todo.title); //checks if everyone has title
    const sorted = data.sort((todo) => todo.title);

    //includes,slice,splice
    const sliced = data.slice(1, 3);
    const spliced = data.slice(3); //just removal

    // console.log(spliced);
    const [{ title }] = completed;
    console.log(`the first completed todo is ${title}`);
    console.log(`Completed Count is ${completed.length}`);
  } catch (error) {
    console.log(error);
  }
}

getData();
