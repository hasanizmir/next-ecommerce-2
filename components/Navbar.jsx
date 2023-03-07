import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi"

const Navbar = () => {
  return (
    <div className="w-full py-6 flex justify-between px-5">
      <Link href="/" className="font-semibold nav-link">Books</Link>
      <GiBookshelf className="text-3xl text-red-500"/>
      <button className="flex text-2xl cursor-pointer relative border-0">
        <AiOutlineShopping className="nav-link"/>
        <span className="absolute -right-2 text-xs w-4 h-4 rounded-full bg-red-600 text-white">
          4
        </span>
      </button>
    </div>
  );
};

export default Navbar;
