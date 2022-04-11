Feature: Shopping-cart
As a user I want to be able to add products to
the shopping cart, change the quantity of added products
and remove products, so that I can decide what to buy.

    Scenario: Clicking a buy button
        Given that I can see the product list
        When I click on the buy button for "Juice - Orange, Concentrate"
        Then 1 item of "Juice - Orange, Concentrate" should be added to the cart