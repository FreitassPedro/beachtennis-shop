import React from "react";
import { Product } from "../../types/Products";

interface ImagesProductProps {
    product: Product;
}

const ImagesProduct: React.FC<ImagesProductProps> = ({product}) => {
    const productImages = [
        "https://fastly.picsum.photos/id/575/400/400.jpg?hmac=dS8X4b6zSoqMLuN37UirCnpHt3TGQ7IPMILoxuDTd1A",
        "https://fastly.picsum.photos/id/575/400/400.jpg?hmac=dS8X4b6zSoqMLuN37UirCnpHt3TGQ7IPMILoxuDTd1A",
        "https://fastly.picsum.photos/id/575/400/400.jpg?hmac=dS8X4b6zSoqMLuN37UirCnpHt3TGQ7IPMILoxuDTd1A",
        "https://fastly.picsum.photos/id/575/400/400.jpg?hmac=dS8X4b6zSoqMLuN37UirCnpHt3TGQ7IPMILoxuDTd1A",
        "https://fastly.picsum.photos/id/575/400/400.jpg?hmac=dS8X4b6zSoqMLuN37UirCnpHt3TGQ7IPMILoxuDTd1A",
    ];
    const [selectedImage, setSelectedImage] = React.useState(0);


    return (
        <div className="w-full ">
            {/* Small screens: One large image + thumbnails */}
            <div className="block md:hidden">
                {/* Main image */}
                <div className="bg-gray-200 overflow-hidden mb-4 w-full aspect-square">
                    <img
                        src={productImages[selectedImage]}
                        alt="Raquete Pro Carbon"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Thumbnail row */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {productImages.map((image, index) => (
                        <div
                            key={index}
                            className={`bg-gray-200  overflow-hidden min-w-16 w-16 h-16 cursor-pointer transition-all
                                                ${selectedImage === index ? 'ring-2 ring-green-500' : 'opacity-70 hover:opacity-100'}`}
                            onClick={() => setSelectedImage(index)}
                        >
                            <img
                                src={image}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Medium/Large screens: 2x2 grid layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-4">
                {productImages.map((image, index) => (
                    <div
                        key={index}
                        className={`bg-gray-200  overflow-hidden cursor-pointer transition-all ${index < 2 ? 'aspect-square' : 'aspect-square'}`}
                    >
                        <img
                            src={image}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
                {/* If there are less than 4 images, add placeholder for grid consistency */}
                {productImages.length < 4 && (
                    <div className="bg-gray-200  overflow-hidden aspect-square">
                        <img
                            src={productImages[0]}
                            alt="Product additional view"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </div>
        </div>

    )
}

export default ImagesProduct;