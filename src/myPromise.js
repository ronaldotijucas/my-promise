export function MyPromise(action) {
  const resolver = value => {
    this.value = value;
  };

  const rejector = value => {
    this.value = value;
  };

  action(resolver.bind(this), rejector.bind(this));

  this.then = callback => {
    this.value = callback(this.value);
    return this;
  };

  this.katch = callback => {
    callback(this.value);
  };
}
