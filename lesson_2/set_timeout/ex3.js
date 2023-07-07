setTimeout(() => {
  setTimeout(() => {
    q();
  }, 15);

  d();

  setTimeout(() => {
    n();
  }, 5);

  z();
}, 10);

setTimeout(() => {
  s();
}, 20);

setTimeout(() => {
  f();
});

g();

/*
The functions are run in the following order:
g, f, d, z, n, s, q
*/
