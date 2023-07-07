let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error: Not Launch School');
  }, 2000);
});

promise.catch((message) => {
  console.log(message);
});
