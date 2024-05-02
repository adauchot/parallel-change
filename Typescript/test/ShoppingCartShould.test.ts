import { ShoppingCart } from "../src/Field/ShoppingCart";
import {Item} from "../src/Field/Item";
import {ShoppingCartV2} from "../src/Field/ShoppingCartV2";

describe("shopping cart", () => {
  let cart: ShoppingCart;
  let cartV2: ShoppingCartV2;
  beforeEach(() => {
    cart = new ShoppingCart();
    cartV2 = new ShoppingCartV2();
  });

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
  it('calculates the final price', () => {
    cartV2.add(
        new Item(100, 2),
        new Item(100, 1)
    );

    expect(cartV2.calculateTotalPrice()).toBe(300);
  });

  it("knows the number of items", () => {
    cartV2.add(
      new Item(100, 2),
      new Item(100, 1)
    );

    expect(cartV2.numberOfProducts()).toBe(3);
  });

  it("may offer discounts when there is at least one expensive product", () => {
    cartV2.add(
      new Item(50, 2),
      new Item(120, 1)
    );

    expect(cartV2.hasDiscount()).toBeTruthy();
  });

  it("does not offer discount for cheap products", () => {
    cartV2.add(
      new Item(50, 2),
      new Item(80, 1)
    );

    expect(cartV2.hasDiscount()).toBeFalsy();
  });
});
