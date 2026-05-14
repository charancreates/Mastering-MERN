// end of day challenge: close everything.
//  build a small script that fetches some fake data (use jsonplaceholder.typicode.com),
//  handles errors properly, uses destructuring on the response, and logs results. from scratch. no references.

async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    const { userId, id, title, completed } = data;
    console.log(userId);
    console.log(id);
    console.log(title);
    console.log(completed);
  } catch (error) {
    console.log(error);
  }
}

getData();
