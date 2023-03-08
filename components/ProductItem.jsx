import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <div className=" w-full md:w-[32%] box-content bg-white rounded-lg overflow-hidden shadow-lg relative">
      <Link href={`/product/${product.isbn13}`}>
        <Image
          className="w-full"
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
        />
        <div className="p-4">
          <h2 className="font-bold text-lg mb-2">{product.title}</h2>
          <p className="text-gray-700 text-base">{product.subtitle}</p>
          <p className="font-bold text-lg mt-2">{product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
