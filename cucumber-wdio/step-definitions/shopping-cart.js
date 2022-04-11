const { Given, When, Then } = require('wdio/cucumber-framework');
const pauseTime = 3000;

// browser.url - navigate to a page/url

Given('that I can see the product list', async () => {
    await browser.url('/');
});

When(/^I click on the buy button for "(.*)"$/, async (productName) => {
    // grab all divs that hace the class productInList
    let products = await $$('.productInList');
    // create an empty variable called foundProduct
    let foundProduct;
    // loop through all products divs
    for (let product of products) {
        // if we find the text in the divs includes the product name
        if((await product.getText()). includes(productName)) {
            // then save the productDiv in foundProduct
            foundProduct = product;

        }
    }
    // check that we found a product
    expect(foundProduct).toBeTruthy();
    // grab the buyButton of the found product
    let buyButton = await foundProduct.$('.buyButton');
    // scroll the buybutton into view
    await buyButton.scrollIntoView();
    // click the buybutton
    await buyButton.click();
});

Then(/^(\d*) item of "(.*)" should be added to the cart$/, 
async (quantity, productName) => {
    // get all the table cells in the first row of table that is the shoppingList/cart
    let tds = await $$('.shoppingList tr:first-child td')
    // check that we have the expected content in the cart
    await expect(tds[0]).toHaveText(quantity);
    await expect(tds[1]).toHaveText(productName);
    // mostly for humans scroll to the shopping cart
    await tds[0].scrollIntoView();
    // pause before ending the step
    await browser.pause(pauseTime)
});