//require mysql
const mysql = require("mysql");

//require inquirer
const inquirer = require("inquirer")

//connect to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

//confirm database connection
connection.connect(function(err) {
    if (err) throw err;
    queryAllItems() 
});  


//display all of the items available for sale. Include the ids, names, and prices of products for sale.
function queryAllItems() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log("\n----------AMAZON PRODUCTS----------");
        for (var i = 0; i < res.length; i++) {
        console.log("ID#: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " +  res[i].department_name + " | " +  "Price: " + "$" + res[i].price+ " | " + "In Stock: " + res[i].stock_quantity);
      };
        console.log("-----------------------------------");
        
    });
  };

//Prompt users with two messages

inquirer
  .prompt([
    {
        type: "input",
        name: "productID",
        message: "\nWhat is the ID of the product you would like to buy?\n"
    },

    {
        type: "input",
        name: "units",
        message: "How many units of the product would you like to buy?"
    }
    
  ])
  .then(function(customerInput) {
        connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        var chosenProduct;
        for (var i = 0; i < res.length; i++){
            if (res[i].item_id === parseInt(customerInput.productID)){
                chosenProduct = res[i];
                };
            };

        if (chosenProduct.stock_quantity > parseInt(customerInput.units)) {
            connection.query("UPDATE products SET ? WHERE ?",
            [
            {
                stock_quantity: (chosenProduct.stock_quantity - parseInt(customerInput.units))
            },
            {
                item_id: chosenProduct.item_id
            }
            ],
            function(error) {
            if (error) throw error;
                console.log("Thank you for your purchase! Your total cost is: " + "$" + parseInt(customerInput.units) * chosenProduct.price);

                });
            };
    });
});
//connection.end();
// 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

//    * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.