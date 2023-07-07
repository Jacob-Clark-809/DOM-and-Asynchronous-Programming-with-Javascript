for (let index = 1; index <= 10; index += 1) {
  setTimeout(() => {
    console.log(index);
  }, index * 1000);
}