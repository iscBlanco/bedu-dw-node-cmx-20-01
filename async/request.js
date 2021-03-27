const bar = () => console.log('bar');
const baz = () => console.log('baz');

const requestApi = () => {
  return new Promise((resolve, reject) => {
    resolve('should be right after baz, before bar');
  });
}

const foo = () => {
  console.log('foo');
  setTimeout(bar, 0);
  requestApi() // > 1s
    .then(resolve => console.log(resolve));
  baz();
}

foo();

