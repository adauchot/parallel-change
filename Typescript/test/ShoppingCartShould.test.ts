import {Item} from "../src/Field/Item";
import {ShoppingCart} from "../src/Field/ShoppingCart";

describe("shopping cart", () => {
  let cart: ShoppingCart;
  beforeEach(() => {
    cart = new ShoppingCart();
  });

  it('calculates the final price', () => {
    cart.add(
        new Item(100, 2),
        new Item(100, 1)
    );

    expect(cart.calculateTotalPrice()).toBe(300);
  });

  it("knows the number of items", () => {
    cart.add(
      new Item(100, 2),
      new Item(100, 1)
    );

    expect(cart.numberOfProducts()).toBe(3);
  });

  it("may offer discounts when there is at least one expensive product", () => {
    cart.add(
      new Item(50, 2),
      new Item(120, 1)
    );

    expect(cart.hasDiscount()).toBeTruthy();
  });

  it("does not offer discount for cheap products", () => {
    cart.add(
      new Item(50, 2),
      new Item(80, 1)
    );

    expect(cart.hasDiscount()).toBeFalsy();
  });
});
