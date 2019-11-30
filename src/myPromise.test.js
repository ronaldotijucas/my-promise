import { MyPromise } from "./myPromise";

it("executes the action callback", () => {
  const action = jest.fn();
  new MyPromise(action);
  expect(action).toHaveBeenCalled();
});

it("executes then when resolved", () => {
  const action = jest.fn();
  new MyPromise(resolve => resolve()).then(action);
  expect(action).toHaveBeenCalled();
});

it("passes the resolved value to then", done => {
  new MyPromise(resolve => resolve("value")).then(value => {
    expect(value).toBe("value");
    done();
  });
});

it("executes catch when rejected", () => {
  const action = jest.fn();
  new MyPromise((_, reject) => reject()).katch(action);
});

it("passes the rejected value to katch", done => {
  new MyPromise((r, reject) => reject("value")).katch(value => {
    expect(value).toBe("value");
    done();
  });
});

it("chains `then` calls", done => {
  new MyPromise(resolve => resolve())
    .then(() => "value")
    .then(value => {
      expect(value).toBe("value");
      done();
    });
});
