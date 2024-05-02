import {Item} from "./Item";

export class ShoppingCart {
  items: Item[] = [];
  price = 0;

  add = (price: number) => (this.price = price);

  calculateTotalPrice = () => this.price;

  numberOfProducts = () => 1;

  hasDiscount = () => this.price > 100;

  // TODO: Remember to provide one commit by phase (expand, migrate, contract)
  // Multiple items handling
  addMultipleItems = (items: Item[]) => {
    items.forEach(item => {
      this.items.push(item);
    });
  }

  calculateTotalPriceOfMultipleItems = () => {
    return this.items
        .map(item => item.price * item.count)
        .reduce((acc, itemTotalPrice) => acc + itemTotalPrice, 0);
  };

  numberOfProductsOfMultipleItems = () => {
    return this.items
        .map(item => item.count)
        .reduce((acc, itemCount) => acc + itemCount, 0);
  };

  hasDiscountWithMultipleItems = () => {
    const itemPrices = this.items.map(item => item.price);
    const maxPrice = itemPrices.reduce((maxPrice, currentPrice) => {
      return currentPrice > maxPrice ? currentPrice : maxPrice;
    }, 0);

    return maxPrice > 100;
  };
}
