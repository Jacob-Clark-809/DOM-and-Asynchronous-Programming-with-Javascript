const promise = new Promise(function (resolve, reject) {
  console.log('Me first');
  resolve("I am a Promise");
});

promise.then(value => console.log(value));
console.log("I am NOT a Promise");

/*
Logs:
'Me first'
'I am NOT a Promise'
'I am a promise'
*/