let launchPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('Launch School');
  }, 2000);
});

launchPromise.then((message) => {
  console.log(message);
});

console.log('After then statement!');
