import { ShoppingCart } from "../src/Field/ShoppingCart";
import {Item} from "../src/Field/Item";

describe("shopping cart", () => {
  let cart: ShoppingCart;
  beforeEach(() => (cart = new ShoppingCart()));

  it("calculates the final price", () => {
    cart.add(10);

    expect(cart.calculateTotalPrice()).toBe(10);
  });

  it("knows the number of items", () => {
    cart.add(10);

    expect(cart.numberOfProducts()).toBe(1);
  });

  it("may offer discounts when there is at least one expensive product", () => {
    cart.add(120);

    expect(cart.hasDiscount()).toBeTruthy();
  });

  it("does not offer discount for cheap products", () => {
    cart.add(10);

    expect(cart.hasDiscount()).toBeFalsy();
  });

  // Multiple items tests
  it('should add multiple price', () => {
    cart.addMultipleItems([
        new Item(100, 2),
        new Item(100, 1)
    ]);

    expect(cart.calculateTotalPriceOfMultipleItems()).toBe(300);
  });
});
