import CartItem from "@/components/CartItem";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/redux/cartSlice";
import { toast } from "react-hot-toast";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Order created.");
  };

  const totalPrice = cart.reduce(
    (total, item) =>
      total + Number(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div className="max-w-[1240px] m-auto py-6 px-5">
      <h3 className="font-semibold text-4xl mb-6">My Cart ({cart.length})</h3>
      {cart.length ? (
        cart.map((item) => <CartItem key={item.isbn13} product={item} />)
      ) : (
        <p className="flex items-center justify-center mt-10 font-semibold">
          Cart is empty!
        </p>
      )}
      {cart.length > 0 && (
        <div className="flex justify-end mr-6 mt-10">
          <span className="font-bold text-2xl">
            Total Price: ${totalPrice.toFixed(2)}
          </span>
        </div>
      )}
      <div className="flex items-center justify-center mt-10 space-x-10">
        <Link href="/" className="px-5 py-3 border border-red-600 text-red-600">
          Continue Shopping
        </Link>
        {cart.length > 0 && (
          <button
            className="px-5 py-3 bg-red-600 text-white"
            onClick={() => handleClearCart()}
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
