CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(20) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price DECIMAL(5,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shaving Cream", "Beauty", 4.00, 80), ("Sneakers", "Shoe", 20.00, 100), ("Pillow", "Home", 15.00, 75), ("TV", "Electronic", 800.00, 56), ("Table", "Furniture", 300.00, 40), ("Laptop", "Electronic", 900.00, 60), ("IPad", "Electronic", 560.00, 70), ("Deodorant", "Beauty", 3.00, 30), ("Pants", "Apparel", 12.00, 90), ("Tshirt", "Apparel", 8.00, 60), ("Socks", "Apparel", 6.00, 30), ("Toothbrush", "Toiletry", 4.00, 60), ("Frame", "Home", 10.00, 90), ("Shoe Rack", "Home", 18.00, 59), ("Hairspray", "Beauty", 7.00, 30), ("Rug", "Home", 4.00, 60);