require('./fakeDOM.js');

const { grabEl } = require('../frontend/helpers');

describe('Test grabEl', () => {

  test('Get the content of header tag is correct', () => {

    let content = grabEl('header').innerHTML.trim();

    expect(content).toBe('<h1>Our grocery shop</h1>');

  });

})