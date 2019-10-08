function SalesOrder(customer, TaxRate, items) {
    salesOrder = {};
    salesOrder.customer = customer;
    salesOrder.TaxRate = TaxRate;
    salesOrder.items = items;

    salesOrder.getValue = function() {
        totalValue = 0.0;
        salesOrder.items.forEach(item => {
            totalValue = totalValue + item.givePrice();
        });
        return totalValue;
    }

    salesOrder.TotalValue  = function () {
        priceWithoutSalesTax = salesOrder.getValue();
        priceWithSalesTax = salesOrder.getValue() + (priceWithoutSalesTax * salesOrder.TaxRate);
        return priceWithSalesTax;
    }

    return salesOrder;
}

module.exports = SalesOrder;
