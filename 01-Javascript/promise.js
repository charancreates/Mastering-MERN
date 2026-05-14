console.log("Before promise");

function add() {
  return 30;
}

function fetchdata() {
  return new Promise((resolve, reject) => {
    let num = Math.random();
    if (num > 0.5) {
      resolve(`data received ${num}`);
    } else {
      reject(`failed ${num}`);
    }
  });
}

async function run() {
  try {
    const result = await fetchdata();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

run();
