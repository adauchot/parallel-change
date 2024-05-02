import {ShoppingCart} from "./ShoppingCart";
import {Item} from "./Item";

export class ImagineThisIsAClientInADifferentRepository {
  FormattedPrice = () => {
    const cart = new ShoppingCart();
    cart.add(new Item(10, 1));
    return `Total price is ${cart.calculateTotalPrice()} euro`;
  };
}
