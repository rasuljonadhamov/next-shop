"use client";

import React, { useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
};

interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

interface ProductCardProps {
  products: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  const [showMore, setShowMore] = useState<{ [key: number]: boolean }>({});

  const toggleShowMore = (productId: number) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [productId]: !prevShowMore[productId],
    }));
  };

  return (
    <div className="grid px-16 mt-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col shadow-md rounded-lg overflow-hidden mb-4"
        >
          <img
            src={product.category.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4 bg-white">
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
            {product.description && (
              <p className="text-gray-500 mb-2">
                {showMore[product.id]
                  ? product.description
                  : `${product.description.split(" ").slice(0, 4).join(" ")}${
                      product.description.split(" ").length > 4 ? "..." : ""
                    }`}
                {product.description.split(" ").length > 4 && (
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => toggleShowMore(product.id)}
                  >
                    {showMore[product.id] ? " Show Less" : " Show More"}
                  </span>
                )}
              </p>
            )}
            {!product.description && (
              <p className="text-gray-500 mb-2">No description available</p>
            )}
            <p className="p-2 rounded-3xl my-2 text-center bg-slate-400 w-36">
              {product.category.name}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-red-500 font-bold">
                Price <br />${product.price.toFixed(2)}
              </span>
              <button className="px-3 py-2 bg-blue-500 text-white rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
``;
