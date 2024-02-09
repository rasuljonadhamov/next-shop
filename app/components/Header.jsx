"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { EventEmitter } from "eventemitter";

const emitter = new EventEmitter();

const MyHeader = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleCartUpdated = (product) => {
      setCartItems((prevState) => [...prevState, product]);
    };

    emitter.on("cartUpdated", handleCartUpdated);

    return () => emitter.removeListener("cartUpdated", handleCartUpdated);
  }, []);

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className="top-0 w-full h-20 bg-cover bg-no-repeat bg-center md:h-32"
      style={{ backgroundImage: `url(/public/header-bg.svg)` }}
    >
      <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-8">
        <div className="flex items-center">
          <Link href="/" className="text-black font-bold text-xl ml-4">
            Next Store
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-black font-medium hover:text-gray-200">
            Home
          </Link>

          <p
            href="/products"
            className="text-black font-medium hover:text-gray-200"
          >
            Cart ({totalQuantity})
          </p>

          <Link
            href="https://github.com/rasuljonadhamov/next-shop"
            className="text-black font-medium hover:text-gray-200"
          >
            Github
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default MyHeader;
