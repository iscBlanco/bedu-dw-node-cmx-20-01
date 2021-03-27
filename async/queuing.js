const bar = () => console.log('bar');
const baz = () => console.log('baz');

const foo = () => {
  console.log('foo');
  setTimeout(bar, 0); // Queuing Function: setTimeout // Task queu
  baz();
}

foo();

// Output?

❌
// foo
// bar
// baz

❌
// bar
// foo
// baz

👌🏽
// foo
// baz
// bar