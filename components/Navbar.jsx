import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <div className="max-w-[1240px] m-auto py-6 flex justify-between px-5">
      <nav>
        <Link href="/" className="font-semibold nav-link">Books</Link>
        <Link href="/contact" className="font-semibold nav-link">Contact</Link>
      </nav>
      <button className="flex text-2xl cursor-pointer relative border-0">
        <AiOutlineShopping className="nav-link"/>
        <span className="absolute right-3 text-xs w-4 h-4 rounded-full bg-red-600 text-white">
          {cart.length}
        </span>
      </button>
    </div>
  );
};

export default Navbar;
