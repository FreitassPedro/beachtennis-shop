
interface Address {
    id: string;
    type: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    isDefault: boolean;
}

const MyAddress = () => {

    const addresses: Address[] = [
        {
            id: '1',
            type: 'Residencial',
            street: 'Rua das Praias',
            number: '123',
            complement: 'Apto 45',
            neighborhood: 'Beira Mar',
            city: 'Santos',
            state: 'SP',
            zipCode: '11050-200',
            isDefault: true
        },
        {
            id: '2',
            type: 'Trabalho',
            street: 'Av. Paulista',
            number: '1500',
            complement: 'Sala 304',
            neighborhood: 'Bela Vista',
            city: 'São Paulo',
            state: 'SP',
            zipCode: '01310-200',
            isDefault: false
        }
    ];

    return (
        <div></div>

    )
}

export default MyAddress;