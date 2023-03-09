import axios from "axios";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import { addToCart } from "@/redux/cartSlice";

const ProductDetail = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (data) => {
    dispatch(addToCart(data))
    toast.success('Succesfully added..');
  }

  return (
    <>
      <div className="bg-white">
        <div className="pt-6 pb-16 sm:pb-24">
          <div className="mx-auto mt-8">
            <div className="flex flex-col md:flex-row gap-x-8">
              <div className="w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none relative">
                <Image
                  src={`${data.image}`}
                  alt={data.title}
                  width={300}
                  height={350}
                />
              </div>
              <div className="lg:col-span-5 lg:col-start-8 mt-8 md:mt-0">
                <h1 className="text-xl font-medium text-gray-900 ">
                  {data.title}
                </h1>
                <p className="text-xl font-light text-gray-700 mt-4">
                  {data.authors}
                </p>
                <p className="text-xl font-light text-gray-700 mt-4">
                  {data.desc}
                </p>
                <p className="text-xl font-normal text-gray-500 mt-4">
                  {data.price}
                </p>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => handleAddToCart(data)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

export async function getStaticPaths() {
  const { data } = await axios.get(`https://api.itbook.store/1.0/new`);
  const paths = data.books.map((post) => ({
    params: { id: post.isbn13.toString() },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(
    `https://api.itbook.store/1.0/books/${params.id}`
  );

  return { props: { data } };
}
