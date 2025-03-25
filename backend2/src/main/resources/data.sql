INSERT INTO users (id, name, email, password, created_at)
VALUES 
    (1, 'John Doe', 'john.doe@example.com', 'password123', '2023-01-01 10:00:00'),
    (2, 'Jane Doe', 'jane.doe@example.com', 'securepassword', '2023-01-02 11:00:00'),
    (3, 'Mike Smith', 'mike.smith@example.com', 'mypassword', '2023-01-03 12:30:00'),
    (4, 'Emily Davis', 'emily.davis@example.com', 'password456', '2023-01-04 13:45:00');

-- Inserindo endereços na tabela 'address'
INSERT INTO address (id, address_name, recipient, number, street, neighborhood, complement, city, state, zip, reference_point, user_id)
VALUES
    (1, 'Home', 'John Doe', '123', 'Main St', 'Downtown', 'Apt 45', 'New York', 'NY', '10001', 'Near Central Park', 1),
    (2, 'Work', 'John Doe', '456', 'Elm St', 'Midtown', NULL, 'San Francisco', 'CA', '94101', 'Opposite Tech Hub', 1),
    (3, 'Parents', 'Jane Doe', '789', 'Pine Ave', 'Old Town', 'Suite 2B', 'Chicago', 'IL', '60614', 'Near Museum', 2),
    (4, 'Vacation', 'Jane Doe', '101', 'Maple Dr', 'Seaside', NULL, 'Boston', 'MA', '02118', 'Close to Beach', 2),
    (5, 'Friend\'s House', 'John Doe', '202', 'Oak St', 'Uptown', 'House 22', 'Los Angeles', 'CA', '90002', 'Next to Supermarket', 1),
    (6, 'Rental', 'Alice Collins', '303', 'Birch Rd', 'Sunny Isles', 'Floor 12', 'Miami', 'FL', '33101', NULL, 3),
    (7, 'Main Office', 'Bob Wilson', '404', 'Cedar Blvd', 'Technology District', 'Room 5', 'Seattle', 'WA', '98101', 'Tech Campus', 4);