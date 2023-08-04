const get = (url) => {
  if (url === '/persons') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'John' },
          { id: 2, name: 'Jane' },
          { id: 3, name: 'Joe' },
        ]);
      }, 1000);
    });
  }

  if (url === '/persons/1') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John', age: 30 });
      }, 1000);
    });
  }

  if (url === '/persons/2') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 2, name: 'Jane', age: 25 });
      }, 1000);
    });
  }

  if (url === '/persons/3') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 3, name: 'Joe', age: 50 });
      }, 1000);
    });
  }

  throw new Error(`Unmocked url: ${url}`);
};

export const api = { get };
