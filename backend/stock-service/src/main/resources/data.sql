-- comentário sql
-- habilitar no application.properties

INSERT INTO product_inventory (id, product_code, stock) VALUES (1, 1211112, 10);
INSERT INTO product_inventory (id, product_code, stock) VALUES (2, 155521, 10);

INSERT INTO product (id, code, description, image_url, name, price) VALUES (1, 1211112, 'Product 1 is amazing', 'https://via.placeholder.com/150', 'Product 1', 100.00);
INSERT INTO product (id, code, description, image_url, name, price) VALUES (2, 155521, 'Product 2 is amazing', 'https://via.placeholder.com/150', 'Product 2', 200.00);
