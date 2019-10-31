function SalesOrder(customer, TaxRate, items) {
    salesOrder = {};
    salesOrder.customer = customer;
    salesOrder.TaxRate = TaxRate;
    salesOrder.items = items;

    salesOrder.getValue = function() {
        totalValue = 0.0;
        salesOrder.items.forEach(item => {
            totalValue = totalValue + item.Price();
        });
        return totalValue;
    }

    salesOrder.TotalValue  = function () {
        subtotal = salesOrder.getValue();
        priceWithSalesTax = salesOrder.getValue() + (subtotal * salesOrder.TaxRate);
        return priceWithSalesTax;
    }

    return salesOrder;
}

module.exports = SalesOrder;
