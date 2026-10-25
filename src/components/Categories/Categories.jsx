import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import instance from "../../Utils/axiosInstance";
import CategoryCart from "./CategoryCart";

export default function Categories() {
  const trackRef = useRef(null);
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await instance.get("/categories");
      return response.data.data;
    },
  });

  const scrollCategories = (direction) => {
    trackRef.current?.scrollBy({
      left: direction * Math.max(trackRef.current.clientWidth * 0.75, 220),
      behavior: "smooth",
    });
  };

  return (
    <section className="border-y border-gray-200 py-10" aria-labelledby="categories-heading">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-2">Browse</p>
          <h2 id="categories-heading" className="section-heading">Shop by category</h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollCategories(-1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 hover:bg-gray-100"
            aria-label="Scroll categories left"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => scrollCategories(1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 hover:bg-gray-100"
            aria-label="Scroll categories right"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      {isLoading && <p role="status" className="py-8 text-center text-gray-500">Loading categories…</p>}
      {error && <p role="alert" className="py-8 text-center text-red-700">Categories could not be loaded.</p>}
      {!isLoading && !error && data?.length === 0 && (
        <p className="py-8 text-center text-gray-500">No categories are available right now.</p>
      )}
      {!isLoading && !error && data?.length > 0 && (
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "thin" }}
        >
          {data.map((item) => (
            <CategoryCart key={item._id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
