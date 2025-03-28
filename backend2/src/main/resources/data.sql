INSERT INTO users (id, name, email, password, created_at)
VALUES 
    (1, 'Joao Miguel', 'johnexample.com', 'password123', '2023-01-01 10:00:00'),
    (2, 'Felipe Martins', 'felipe@example.com', 'securepassword', '2023-01-02 11:00:00'),
    (3, 'Miguel dos Santos', 'miguel@example.com', 'mypassword', '2023-01-03 12:30:00'),
    (4, 'Emily Davis', 'emily.davis@example.com', 'password456', '2023-01-04 13:45:00');

-- Inserindo endereços na tabela 'address'
INSERT INTO address (id, address_name, zip, recipient, number, street, neighborhood, complement, city, state, reference_point, user_id)
VALUES
(1, 'Casa da Maria', '01001000', 'Maria Silva', '123', 'Rua Augusta', 'Bela Vista', 'Apto 42', 'São Paulo', 'SP', 'Próximo ao MASP', 1),
(2, 'Trabalho do João', '20010000', 'João Pereira', '456', 'Avenida Rio Branco', 'Centro', 'Sala 801', 'Rio de Janeiro', 'RJ', 'Edifício Avenida Central', 1),
(3, 'Apartamento do Pedro', '30110000', 'Pedro Souza', '789', 'Rua da Bahia', 'Lourdes', 'Condomínio Solar', 'Belo Horizonte', 'MG', 'Perto da Praça da Liberdade', 3),
(4, 'Casa da Ana', '90010000', 'Ana Oliveira', '101', 'Avenida Borges de Medeiros', 'Centro Histórico', 'Casa Fundos', 'Porto Alegre', 'RS', 'Ao lado do Mercado Público', 4)