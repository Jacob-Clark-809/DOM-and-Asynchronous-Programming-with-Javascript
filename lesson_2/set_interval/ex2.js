function startCounting() {
  let number = 1;
  return setInterval(() => {
    console.log(number);
    number += 1;
  }, 1000);
}

function stopCounting(counter) {
  clearInterval(counter);
}

let counter = startCounting();
