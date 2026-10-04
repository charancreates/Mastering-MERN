const input = document.querySelector("input");
const defaulText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDebounceText = debounce(() => {
  //   debounceText.textContent = text;
  incrementCount(debounceText);
});
const updateThrottleText = throttle(() => {
  //   throttleText.textContent = text;
  incrementCount(throttleText);
}, 100);

input.addEventListener("input", (e) => {
  defaulText.textContent = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

//one req after everything is changed.

function throttle(cb, delay = 1000) {
  let shouldWait = false;

  return () => {
    if (shouldWait) return;

    cb();
    shouldWait = true;

    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}

document.addEventListener("mousemove", (e) => {
  incrementCount(defaulText);
  updateDebounceText();
  updateThrottleText();
});

function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
