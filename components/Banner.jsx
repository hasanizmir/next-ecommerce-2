import Image from "next/image";

const Banner = () => {
  return (
    <div className="py-24 px-10 bg-[#e9e9e9] rounded-2xl relative h-[500px] w-full">
      <div>
        <p className="text-xl">Lorem ipsum dolor sit</p>
        <h3 className="text-6xl mt-1 font-bold">Book Store</h3>
        <Image
          className="absolute top-0 right-[10%] hidden md:block"
          src="/books.png"
          alt="book"
          width={400}
          height={410}
        />
        <div>
          <button
            type="button"
            className=" rounded-lg py-1 px-4 bg-red-500 text-white border-0 mt-9 text-lg cursor-pointer"
          >
            Shop now
          </button>
          <div className="absolute right-[10%] bottom-[5%] flex flex-col items-end">
            <h5 className="font-bold">Description</h5>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
