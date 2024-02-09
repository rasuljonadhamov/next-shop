"use client";
import React, { useState } from "react";
import Link from "next/link";
import { EventEmitter } from "eventemitter";

const emitter = new EventEmitter();

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
}

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
  const handleAddToCart = (product: {}) => {
    emitter.emit("cartUpdated", product); // Emit event with product data
  };
  // const handleAddToCart = (productId: number) => {
  //   setCartItems((prevCartItems: {}) => {
  //     const existingItemIndex = prevCartItems.findIndex(
  //       (item: { id: number }) => item.id === productId
  //     );
  //     if (existingItemIndex !== -1) {
  //       return prevCartItems.map((item, index: number) =>
  //         index === existingItemIndex
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     } else {
  //       return [...prevCartItems, { id: productId, quantity: 1 }];
  //     }
  //   });
  // };

  return (
    <div className="grid px-16 mt-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col shadow-md rounded-lg overflow-hidden mb-4"
        >
          <Link href={`/product/${product.id}`}>
            <img
              src={product.category.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
            />
          </Link>
          <div className="p-4 bg-white">
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
            {product.description && (
              <p className="text-gray-500 my-6">
                {product.description.length > 100
                  ? `${product.description.substring(0, 100)}...`
                  : product.description}
                {product.description.length > 100 && (
                  <Link href={`/product/${product.id}`}>
                    <span className="mx-3 cursor-pointer text-black">
                      Read More
                    </span>
                  </Link>
                )}
              </p>
            )}
            {!product.description && (
              <p className="text-gray-500 mb-2">No description available</p>
            )}
            <p className="p-2 rounded-3xl my-5 cursor-pointer text-center bg-slate-400 w-36">
              {product.category.name}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-red-500 font-bold">
                Price <br />${product.price.toFixed(2)}
              </span>
              <button
                className="px-3 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => handleAddToCart(product)}
              >
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
