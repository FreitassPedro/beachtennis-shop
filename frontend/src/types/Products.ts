export interface Product {
    id: number;
    brand: string;
    name: string;
    summary: string;
    description: string[];
    price: number;
    image: string;
    category: string[];
}

export interface ItemCart {
    id: number;
    code: string,
    name: string;
    price: number;
    quantity: number;
    originalPrice: number;
    image: string;
}


export const products: Product[] = [
    {
        id: 1,
        brand: "ADIDAS",
        name: "Raquete De Beach Tennis adidas Bt 3.0 Rosa/amarelo",
        summary: "Nucleo EVA, Exterior EVA, 22mm, Redonda, 27 x 50 cm, 2023, peso 320g. Cor rosa e lima",
        description: [
            "A Raquete adidas Bt 3.0 Rosa/amarelo é ideal para jogadores que buscam controle e conforto.",
            "Seu núcleo em EVA proporciona excelente absorção de impacto, enquanto o exterior em EVA oferece uma sensação suave ao toque.",
            "Com um peso de 320g, esta raquete oferece estabilidade e manobrabilidade para jogadas precisas.",
            "Design moderno em rosa e amarelo, perfeito para quem busca estilo e desempenho nas quadras."
        ],
        price: 640.00,
        image: "adidas_bt_3_0_rosa_amarelo.jpg",
        category: ["Raquetes"]
    },
    {
        id: 2,
        brand: "ADIDAS",
        name: "Raquete De Beach Tennis adidas Bt 3.0 Azul E Rosa",
        summary: "Nucleo EVA, Exterior EVA, 22mm, Redonda, 27 x 50 cm, 2023, peso 320g. Cor Azul com Rosa",
        description: [
            "A Raquete adidas Bt 3.0 Azul e Rosa é perfeita para jogadores que valorizam o equilíbrio entre potência e controle.",
            "Seu núcleo em EVA e exterior em EVA proporcionam uma excelente resposta em cada golpe.",
            "Com um peso de 320g, esta raquete oferece estabilidade e conforto durante as partidas.",
            "Design elegante em azul e rosa, ideal para quem busca estilo e desempenho nas quadras."
        ],
        price: 640.00,
        image: "adidas_bt_3_0_azul_rosa.jpg",
        category: ["Raquetes"]
    },
    {
        id: 3,
        brand: "ADIDAS",
        name: "Raquete De Beach Tennis adidas Rx 3.1 H14",
        summary: "Nucleo EVA Soft, Exterior Fibra de Vidro, 22mm, Redonda, 27 x 50 cm, 2023, peso 330g. Verde/azul Cor Verde",
        description: [
            "A Raquete adidas Rx 3.1 H14 é ideal para jogadores que buscam controle e precisão em seus golpes.",
            "Seu núcleo em EVA Soft e exterior em Fibra de Vidro proporcionam uma sensação suave e confortável ao toque.",
            "Com um peso de 330g, esta raquete oferece estabilidade e manobrabilidade para jogadas precisas.",
            "Design moderno em verde e azul, perfeito para quem busca estilo e desempenho nas quadras."
        ],
        price: 630.00,
        image: "adidas_rx_3_1_h14.jpg",
        category: ["Raquetes"]
    },
    {
        id: 4,
        brand: "ADIDAS",
        name: "Raquete De Beach Tennis adidas Rx H14 Carbono 3k 2023",
        summary: "Nucleo Carbono, Exterior Carbono com EVA, 22mm, Redonda, 27 x 50 cm, 2023, peso 320g Cor Verde Azul E Preto",
        description: [
            "A Raquete adidas Rx H14 Carbono 3k 2023 é ideal para jogadores que buscam potência e controle em seus golpes.",
            "Seu núcleo em Carbono e exterior em Carbono com EVA proporcionam uma excelente resposta em cada golpe.",
            "Com um peso de 320g, esta raquete oferece estabilidade e conforto durante as partidas.",
            "Design elegante em verde, azul e preto, ideal para quem busca estilo e desempenho nas quadras."
        ],
        price: 700.00,
        image: "adidas_rx_h14_carbono_3k.jpg",
        category: ["Raquetes"]
    },
    {
        id: 5,
        brand: "ADIDAS",
        name: "Raquete De Beach Tennis adidas Bt 3.0 Azul/verde",
        summary: "Nucleo Fibrade Vidro, Exterior Fibra de Vidro, 22mm, Redonda, 30 x 50 cm, 2023, peso 330g Cor Azul-turquesa",
        description: [
            "A Raquete adidas Bt 3.0 Azul/verde é perfeita para jogadores que buscam controle e precisão em seus golpes.",
            "Seu núcleo em Fibrade Vidro e exterior em Fibra de Vidro proporcionam uma sensação suave e confortável ao toque.",
            "Com um peso de 330g, esta raquete oferece estabilidade e manobrabilidade para jogadas precisas.",
            "Design moderno em azul e verde, perfeito para quem busca estilo e desempenho nas quadras."
        ],
        price: 640.00,
        image: "adidas_bt_3_0_azul_verde.jpg",
        category: ["Raquetes"]
    },
    {
        id: 6,
        brand: "Speed Pró",
        name: "Raquete Beach Tennis 3k Carbono Speed Pro",
        summary: "Nucleo EVA, Exterior Carbono 3K, 22mm, Redonda, 27 x 50 cm, 2023, peso 320g, 15 anos",
        description: [
            "A Raquete Beach Tennis 3k Carbono Speed Pro é ideal para jogadores que buscam potência e controle em seus golpes.",
            "Seu núcleo em EVA e exterior em Carbono 3K proporcionam uma excelente resposta em cada golpe.",
            "Com um peso de 320g, esta raquete oferece estabilidade e conforto durante as partidas.",
            "Ideal para jogadores de nível intermediário a avançado que buscam aprimorar seu jogo."
        ],
        price: 550.00,
        image: "speed_pro_3k_carbono.jpg",
        category: ["Raquetes"]
    },
    {
        id: 7,
        brand: "Wilson",
        name: "Raquete De Beach Tennis Tryumph Wrbt04004005",
        summary: "Nucleo Fibra de Vidro, Exterior Fibra de Vidro, 22mm, Redonda, 27 x 50 cm, 2023, peso 345g",
        description: [
            "A Raquete Wilson Tryumph Wrbt04004005 é perfeita para jogadores que buscam controle e precisão em seus golpes.",
            "Seu núcleo em Fibra de Vidro e exterior em Fibra de Vidro proporcionam uma sensação suave e confortável ao toque.",
            "Com um peso de 345g, esta raquete oferece estabilidade e manobrabilidade para jogadas precisas.",
            "Design moderno e elegante, ideal para quem busca estilo e desempenho nas quadras."
        ],
        price: 670.00,
        image: "wilson_tryumph.jpg",
        category: ["Raquetes"]
    },
    {
        id: 8,
        brand: "Canewin",
        summary: "Nucleo Soft EVA, Exterior Carbono, 20mm, Redonda, 23 x 50 cm, 2023, peso 320g Cor Azul",
        name: "Raquete De Pádel De Praia Camewin Raquete Beach Tennis 2022",
        description: [
            "A Raquete Canewin 2022 é ideal para jogadores que buscam controle e conforto em seus golpes.",
            "Seu núcleo em Soft EVA e exterior em Carbono proporcionam uma sensação suave e confortável ao toque.",
            "Com um peso de 320g, esta raquete oferece estabilidade e manobrabilidade para jogadas precisas.",
            "Design moderno e elegante, ideal para quem busca estilo e desempenho nas quadras."
        ],
        price: 350.00,
        image: "canewin_2022_azul.jpg",
        category: ["Raquetes"]
    },
    {
        id: 9,
        brand: "Canewin",
        name: "Raquete Beach Tennis Carbono Camewin Cores Modelos",
        summary: "Nucleo Soft EVA, Exterior Fibra de Carbono, 20mm, Lagrima 33 x 48 cm, 2023, peso 330g, 8 anos",
        description: [
            "A Raquete Canewin Carbono é perfeita para jogadores que buscam potência e controle em seus golpes.",
            "Seu núcleo em Soft EVA e exterior em Fibra de Carbono proporcionam uma excelente resposta em cada golpe.",
            "Com um peso de 330g, esta raquete oferece estabilidade e conforto durante as partidas.",
            "Design moderno e colorido, ideal para quem busca estilo e desempenho nas quadras."
        ],
        price: 340.00,
        image: "canewin_carbono_cores.jpg",
        category: ["Raquetes"]
    },
    {
        id: 10,
        brand: "Seafront",
        name: "Raquete De Beach Tennis Seafront Venice Pro 3k",
        summary: "3K Carbono, 22mm.",
        description: [
            "A Raquete Seafront Venice Pro 3k é ideal para jogadores que buscam potência em seus golpes.",
            "Construída com 3K Carbono e 22mm de espessura, oferece excelente resposta e durabilidade.",
            "Design moderno e elegante, ideal para quem busca estilo e desempenho nas quadras.",
            "Recomendada para jogadores de nível intermediário a avançado."
        ],
        price: 360.00,
        image: "seafront_venice_pro_3k.jpg",
        category: ["Raquetes"]
    },
    {
        id: 11,
        brand: "Sulina",
        name: "Raquetes De Beach Tennis Sulina",
        summary: "Raquetes De Beach Tennis Sulina",
        description: [
            "A Raquete Sulina é ideal para jogadores iniciantes que buscam uma raquete leve e confortável.",
            "Construída com Fibra de Madeira, oferece um toque suave e uma boa resposta para golpes básicos.",
            "Ideal para quem está começando no Beach Tennis e busca um equipamento acessível e fácil de usar.",
            "Design simples e funcional, perfeito para quem busca praticidade nas quadras."
        ],
        price: 160.00,
        image: "sulina.jpg",
        category: ["Raquetes"]
    },
    {
        id: 12,
        brand: "Pro Life",
        name: "Raquete Beach Tennis 100% Fibra Carbono 3k Prolife Original",
        summary: "Nucleo Soft EVA, Exterior Fibra de Carbono, 22mm, Redonda, 23 x 50 cm, 2023, peso 330g",
        description: [
            "A Raquete Prolife Original 100% Fibra Carbono 3k é ideal para jogadores que buscam controle e precisão.",
            "Seu núcleo em Soft EVA e exterior em Fibra de Carbono proporcionam uma sensação suave e confortável ao toque.",
            "Com um peso de 330g, esta raquete oferece estabilidade e manobrabilidade para jogadas precisas.",
            "Ideal para jogadores de nível intermediário a avançado que buscam aprimorar seu jogo."
        ],
        price: 560.00,
        image: "prolife_3k_original.jpg",
        category: ["Raquetes"]
    },
    {
        id: 13,
        brand: "Pro Life",
        name: "Raquete Beach Tennis Pro Original Fibra Carbono Prolife",
        summary: "Nucleo Soft EVA, Exterior Fibra de Carbono, 22mm, Redonda, 23 x 50 cm, 2023, peso 330g",
        description: [
            "A Raquete Prolife Pro Original Fibra Carbono é perfeita para jogadores que buscam potência e controle em seus golpes.",
            "Seu núcleo em Soft EVA e exterior em Fibra de Carbono proporcionam uma excelente resposta em cada golpe.",
            "Com um peso de 330g, esta raquete oferece estabilidade e conforto durante as partidas.",
            "Ideal para jogadores de nível intermediário a avançado que buscam um equipamento de alta performance."
        ],
        price: 580.00,
        image: "prolife_carbono.jpg",
        category: ["Raquetes"]
    },
    {
        id: 14,
        brand: "ODISSEI",
        name: "Bola Beach Tennis Pack 3 un.",
        summary: "Bola para Beach Tennis, pacote com 3 unidades.",
        description: [
            "O Pack com 3 Bolas de Beach Tennis da ODISSEI é ideal para jogadores que buscam qualidade e durabilidade.",
            "Fabricadas com materiais de alta qualidade, oferecem um excelente desempenho em todas as condições climáticas.",
            "Perfeitas para treinos e jogos, proporcionando um bom controle e precisão nos golpes.",
            "Ideal para jogadores de todos os níveis que buscam um bom custo-benefício."
        ],
        price: 42.00,
        image: "odissei_beach_tennis_balls.jpg",
        category: ["Bolas", "Acessorios"]
    },
    {
        id: 15,
        brand: "HEAD",
        name: "Bola De Beach Tennis Head - Pack 02 un.",
        summary: "Bola para Beach Tennis, pacote com 2 unidades.",
        description: [
            "O Pack com 2 Bolas de Beach Tennis da HEAD é ideal para jogadores que buscam qualidade e desempenho.",
            "Fabricadas com materiais de alta qualidade, oferecem um excelente desempenho em todas as condições climáticas.",
            "Perfeitas para treinos e jogos, proporcionando um bom controle e precisão nos golpes.",
            "Ideal para jogadores de todos os níveis que buscam um bom custo-benefício."
        ],
        price: 70.00,
        image: "head_beach_tennis_balls.jpg",
        category: ["Bolas", "Acessorios"]
    },
    {
        id: 16,
        brand: "ADIDAS",
        name: "Bola Beach Tennis Aditour adidas Pack 3 un.",
        summary: "Bola para Beach Tennis Aditour, pacote com 3 unidades.",
        description: [
            "O Pack com 3 Bolas de Beach Tennis Aditour da adidas é ideal para jogadores que buscam qualidade e durabilidade.",
            "Fabricadas com materiais de alta qualidade, oferecem um excelente desempenho em todas as condições climáticas.",
            "Perfeitas para treinos e jogos, proporcionando um bom controle e precisão nos golpes.",
            "Ideal para jogadores de todos os níveis que buscam um bom custo-benefício."
        ],
        price: 99.00,
        image: "adidas_beach_tennis_balls.jpg",
        category: ["Bolas", "Acessorios"]
    },
    {
        id: 17,
        brand: "Wilson",
        name: "Bola Beach Tennis Wilson Pack 3 un.",
        summary: "Bola para Beach Tennis Wilson, pacote com 3 unidades.",
        description: [
            "O Pack com 3 Bolas de Beach Tennis da Wilson é ideal para jogadores que buscam qualidade e durabilidade.",
            "Fabricadas com materiais de alta qualidade, oferecem um excelente desempenho em todas as condições climáticas.",
            "Perfeitas para treinos e jogos, proporcionando um bom controle e precisão nos golpes.",
            "Ideal para jogadores de todos os níveis que buscam um bom custo-benefício."
        ],
        price: 68.00,
        image: "wilson_beach_tennis_balls.jpg",
        category: ["Bolas", "Acessorios"]
    },
    {
        id: 18,
        brand: "Zarsia",
        name: "Grip",
        summary: "Grip para raquetes de tênis, Beach Tennis e Pádel.",
        description: [
            "O Grip da Zarsia é ideal para jogadores que buscam conforto e segurança em seus golpes.",
            "Fabricado com materiais de alta qualidade, oferece uma excelente aderência e absorção de suor.",
            "Perfeito para quem busca um grip durável e confortável para longas partidas.",
            "Ideal para jogadores de todos os níveis que buscam melhorar seu desempenho nas quadras."
        ],
        price: 15.00,
        image: "zarsia_grip.jpg",
        category: ["Acessórios"],
    },
];