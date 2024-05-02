import {ShoppingCartV2} from "./ShoppingCartV2";
import {Item} from "./Item";

export class ImagineThisIsAClientInADifferentRepository {
  FormattedPrice = () => {
    const cart = new ShoppingCartV2();
    cart.add(new Item(10, 1));
    return `Total price is ${cart.calculateTotalPrice()} euro`;
  };
}
