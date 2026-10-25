import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Card from "../Card/ProductCard";
import instance from "../../Utils/axiosInstance";

export default function FlashSales() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["flashSales"],
    queryFn: async () => {
      const response = await instance.get("/products?page=2");
      return response.data.data;
    },
  });

  return (
    <section className="section-space" aria-labelledby="discover-heading">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-2">Discover</p>
          <h2 id="discover-heading" className="section-heading">Find your next favorite</h2>
        </div>
        <Link to="/products" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-inherit no-underline">
          Shop all <span aria-hidden="true">→</span>
        </Link>
      </div>
      {isLoading && <p role="status" className="py-10 text-center text-gray-500">Loading products…</p>}
      {error && <p role="alert" className="py-10 text-center text-red-700">Products could not be loaded. Please try again.</p>}
      {!isLoading && !error && data?.length === 0 && (
        <p className="py-10 text-center text-gray-500">No products are available right now.</p>
      )}
      {!isLoading && !error && data?.length > 0 && (
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.slice(0, 4).map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.title}
              price={product.price}
              image={product.imageCover}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}
