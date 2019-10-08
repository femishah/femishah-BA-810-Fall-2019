function SalesOrderItem(product, price, quantity) {
    let item = {};
    item.product = product;
    item.price = price;
    item.quantity = quantity;

    item.givePrice = function() {
        return item.price * item.quantity;
    }
    return item;
}

module.exports = SalesOrderItem;

