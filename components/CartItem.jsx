import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { toast } from "react-hot-toast";

import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "@/redux/cartSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
    toast.success("Succesfully removed...");
  };
  return (
    <div className="flex items-center justify-center">
      <Image src={product.image} alt={product.title} width={100} height={100} />
      <div className="p-4 w-2/4">
        <Link href={`/product/${product.isbn13}`}>
          <h2 className="font-bold text-lg mb-2">{product.title}</h2>
          <p className="text-gray-700 text-base">{product.subtitle}</p>
        </Link>
      </div>
      <div className="flex space-x-2 h-6 items-center justify-center w-1/4">
        <button
          disabled={product.quantity === 1}
          className="w-6 h-6 rounded-full border flex items-center justify-center bg-gray-100"
          onClick={() => dispatch(decrementQuantity(product.isbn13))}
        >
          -
        </button>
        <input
          type="text"
          name="quantity"
          disabled
          value={product.quantity}
          className="w-10 border border-gray-500 text-center"
        />
        <button
          className="w-6 h-6 rounded-full border flex items-center justify-center bg-gray-100"
          onClick={() => dispatch(incrementQuantity(product.isbn13))}
        >
          +
        </button>
      </div>
      <div className="w-1/4 flex justify-between mr-4">
        <span className="font-semibold">{product.price}</span>
        <span
          className="text-red-600"
          role="button"
          onClick={() => handleRemoveItem(product.isbn13)}
        >
          Remove
        </span>
      </div>
    </div>
  );
};

export default CartItem;
