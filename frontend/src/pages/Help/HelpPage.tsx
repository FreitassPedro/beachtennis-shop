import React, { useState } from 'react';

interface FaqItem {
    question: string;
    answer: string;
}

const HelpPage: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [expandedItem, setExpandedItem] = useState<number | null>(null);

    // FAQs
    const faqItems: FaqItem[] = [
        {
            question: "Como acompanhar meu pedido?",
            answer: "Você pode acompanhar seu pedido entrando na sua conta e acessando 'Meus Pedidos' ou usando o código de rastreamento enviado por e-mail."
        },
        {
            question: "Qual é o prazo de entrega?",
            answer: "O prazo de entrega varia conforme sua localização. Normalmente, entregamos em até 5 dias úteis nas capitais e 7 dias úteis para demais localidades."
        },
        {
            question: "Como solicitar uma troca ou devolução?",
            answer: "Para solicitar uma troca ou devolução, entre em contato conosco em até 7 dias após o recebimento do produto com o número do pedido e motivo da devolução."
        },
        {
            question: "Quais formas de pagamento são aceitas?",
            answer: "Aceitamos cartões de crédito e débito das principais bandeiras, boleto bancário, PIX e transferência bancária."
        },
        {
            question: "Os produtos têm garantia?",
            answer: "Sim, todos os nossos produtos possuem garantia legal de 90 dias, conforme o Código de Defesa do Consumidor. Alguns produtos possuem garantia estendida do fabricante."
        },
        {
            question: "Posso parcelar minhas compras?",
            answer: "Sim, oferecemos parcelamento em até 10x sem juros nos cartões de crédito para compras acima de R$ 150,00."
        }
    ];

    // Handlers
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log("Form submitted:", formData);
        setSubmitted(true);

        // Reset form after submission
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
            setSubmitted(false);
        }, 3000);
    };

    const toggleItem = (index: number) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Header */}
            <header className="bg-zinc-900 py-4 shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <a href="/" className="text-2xl font-bold text-white">
                                SPORT<span className="text-green-500">STORE</span>
                            </a>
                        </div>

                        <nav className="hidden md:flex space-x-6">
                            <a href="/" className="text-gray-300 hover:text-white transition-colors">
                                Home
                            </a>
                            <a href="/produtos" className="text-gray-300 hover:text-white transition-colors">
                                Produtos
                            </a>
                            <a href="/categorias" className="text-gray-300 hover:text-white transition-colors">
                                Categorias
                            </a>
                            <a href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                                Quem Somos
                            </a>
                            <a href="/fale-conosco" className="text-green-500 font-medium">
                                Fale Conosco
                            </a>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <button className="text-gray-300 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <button className="text-gray-300 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </button>
                            <button className="text-gray-300 hover:text-white transition-colors relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="absolute -top-1 -right-1 bg-green-500 text-xs text-white rounded-full h-4 w-4 flex items-center justify-center">
                                    0
                                </span>
                            </button>
                            <button className="md:hidden text-gray-300 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow py-8">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb Navigation */}
                    <nav className="flex text-sm mb-6">
                        <a href="/" className="text-gray-400 hover:text-white">Home</a>
                        <span className="mx-2 text-gray-500">/</span>
                        <span className="text-white">Fale Conosco</span>
                    </nav>

                    <h1 className="text-3xl font-bold text-white mb-8">Fale Conosco</h1>

                    {/* Contact Form Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-zinc-900 p-6">
                            <h2 className="text-2xl font-bold text-white mb-4">Envie sua mensagem</h2>

                            {submitted ? (
                                <div className="bg-green-600 p-4 text-white mb-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                                </div>
                            ) : null}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-300 mb-2">
                                        Nome completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-800 border border-zinc-700 text-white p-3 focus:outline-none focus:border-green-500"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-300 mb-2">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-800 border border-zinc-700 text-white p-3 focus:outline-none focus:border-green-500"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="subject" className="block text-gray-300 mb-2">
                                        Assunto
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-800 border border-zinc-700 text-white p-3 focus:outline-none focus:border-green-500"
                                        required
                                    >
                                        <option value="">Selecione</option>
                                        <option value="duvida">Dúvida sobre produto</option>
                                        <option value="pedido">Informação sobre pedido</option>
                                        <option value="reclamacao">Reclamação</option>
                                        <option value="sugestao">Sugestão</option>
                                        <option value="outro">Outro</option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-300 mb-2">
                                        Mensagem
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full bg-zinc-800 border border-zinc-700 text-white p-3 focus:outline-none focus:border-green-500"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 font-semibold transition-colors"
                                >
                                    Enviar mensagem
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Section */}
                        <div>
                            <div className="bg-zinc-900 p-6 mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">Informações de Contato</h2>
                                <div className="text-gray-300 space-y-4">
                                    <div className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold">Endereço:</p>
                                            <p>Av. Paulista, 1000</p>
                                            <p>São Paulo, SP - 01310-100</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold">Telefone:</p>
                                            <p>(11) 1234-5678</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold">E-mail:</p>
                                            <p>contato@sportstore.com.br</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold">Horário de Atendimento:</p>
                                            <p>Segunda a Sexta: 9h às 18h</p>
                                            <p>Sábado: 9h às 13h</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="bg-zinc-900 p-6">
                                <h2 className="text-2xl font-bold text-white mb-4">Redes Sociais</h2>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-zinc-900 p-6 mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">Perguntas Frequentes</h2>
                        <div className="space-y-4">
                            {faqItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="border-b border-zinc-800 pb-4"
                                >
                                    <button
                                        onClick={() => toggleItem(index)}
                                        className="flex justify-between items-center w-full text-left"
                                    >
                                        <h3 className="text-green-400 font-semibold">{item.question}</h3>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 text-gray-400 transition-transform ${expandedItem === index ? 'transform rotate-180' : ''}`}
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-linear ${expandedItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="mt-2 text-gray-300 pl-1 pr-6">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="bg-zinc-900 p-6 mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Localização</h2>
                        <div className="w-full h-64 bg-zinc-800 flex items-center justify-center">
                            <div className="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-gray-300">Mapa interativo seria exibido aqui</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
};

export default HelpPage;