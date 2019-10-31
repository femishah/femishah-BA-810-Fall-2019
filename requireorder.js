 let SalesOrderItem = require("./salesorderitem");
 let SalesOrder = require("./salesorder");

   let myWidget = new SalesOrderItem("Widget", 2.5, 10);
   let myGidget = new SalesOrderItem("Gidget", 1.0, 20);

   let myOrder = new SalesOrder("Customer 1", 0.10, [myWidget, myGidget]);
 
  console.log(myOrder.TotalValue())