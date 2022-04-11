const { expect } = require('@jest/globals');

const Product = require('../frontend/Product.js');

describe('Test the Product class', () => {

  test('Creation of a Product', () => {

    let myProduct = new Product(1, 'Broom stick', 200, 'A good broom stick.');

    // Check that the constructor really sets the correct property values
    expect(myProduct.id).toBe(1);
    expect(myProduct.name).toBe('Broom stick');
    expect(myProduct.price).toBe(200);
    expect(myProduct.description).toBe('A good broom stick.');

  });

  test('An id not equal to a number should fail for Product constructor', () => {

    expect(() => {
      new Product('xa', 'X', 200, 'description');
    }).toThrow();

    expect(() => {
      new Product(true, 'X', 200, 'description');
    }).toThrow();


  })


});