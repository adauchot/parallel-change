import {Item} from "./Item";

export class ShoppingCartV2 {
    items: Item[] = [];

    // Multiple items handling
    add = (...items: Item[]) => {
        this.items.push(...items);
    }

    calculateTotalPrice = () => {
        return this.items
            .map(item => item.price * item.count)
            .reduce((acc, itemTotalPrice) => acc + itemTotalPrice, 0);
    };

    numberOfProducts = () => {
        return this.items
            .map(item => item.count)
            .reduce((acc, itemCount) => acc + itemCount, 0);
    };

    hasDiscount = () => {
        const itemPrices = this.items.map(item => item.price);
        const maxPrice = itemPrices.reduce((maxPrice, currentPrice) => {
            return currentPrice > maxPrice ? currentPrice : maxPrice;
        }, 0);

        return maxPrice > 100;
    };
}
