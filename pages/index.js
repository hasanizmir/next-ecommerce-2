import Banner from "@/components/Banner";
import ProductItem from "@/components/ProductItem";
import axios from "axios";

export default function Home({ data }) {
  return (
    <div className="px-5">
      <Banner />
      <div className="flex flex-wrap gap-5 mt-10">
        {data.books?.map((product) => (
          <ProductItem key={product.isbn13} product={product} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get("https://api.itbook.store/1.0/new");

  return {
    props: { data },
  };
};
