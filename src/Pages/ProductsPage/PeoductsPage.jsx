import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/ProductCard";
import { fetchAllProducts } from "../../redux/slices/ProductsSlice";

function ProductsPage() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, isLoading, error } = useSelector((state) => state.products);
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    const selectedCategory = category.trim().toLocaleLowerCase();
    const filtered = products.filter((product) => {
      const searchableText = [
        product.title,
        product.description,
        product.category?.name,
        product.brand?.name,
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase();
      const matchesQuery = !query || searchableText.includes(query);
      const matchesCategory =
        !selectedCategory ||
        product.category?.name?.toLocaleLowerCase() === selectedCategory ||
        product.subcategory?.some(
          (subcategory) =>
            subcategory.name?.toLocaleLowerCase() === selectedCategory
        );
      return matchesQuery && matchesCategory;
    });

    if (sortBy === "price-ascending") {
      return filtered.sort((first, second) => first.price - second.price);
    }
    if (sortBy === "price-descending") {
      return filtered.sort((first, second) => second.price - first.price);
    }
    if (sortBy === "rating") {
      return filtered.sort(
        (first, second) =>
          (second.ratingsAverage || 0) - (first.ratingsAverage || 0)
      );
    }
    return filtered;
  }, [products, search, category, sortBy]);

  const clearFilters = () => {
    setSearchParams({});
    setSortBy("featured");
  };

  if (isLoading) {
    return (
      <div className="page-container py-20 text-center" role="status">
        Loading products…
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container py-20 text-center" role="alert">
        <h1 className="section-heading">We couldn’t load the products</h1>
        <p className="mt-3 text-gray-600">{error}</p>
        <button className="primary-action mt-3" onClick={() => dispatch(fetchAllProducts())}>
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="page-container py-10">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
        <Link to="/" className="text-inherit no-underline hover:underline">Home</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-gray-900">Shop</span>
      </nav>

      <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow mb-2">The shop</p>
          <h1 className="section-heading">Explore the collection</h1>
          <p className="mt-2 text-sm text-gray-600">
            {visibleProducts.length} {visibleProducts.length === 1 ? "product" : "products"}
            {search && <> matching “{search}”</>}
            {category && <> in {category}</>}
          </p>
        </div>
        <label className="flex items-center gap-3 text-sm">
          <span className="whitespace-nowrap">Sort by</span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="min-h-11 rounded border border-gray-300 bg-white px-3"
          >
            <option value="featured">Featured</option>
            <option value="price-ascending">Price: low to high</option>
            <option value="price-descending">Price: high to low</option>
            <option value="rating">Customer rating</option>
          </select>
        </label>
      </div>

      {!visibleProducts.length ? (
        <section className="rounded-lg border border-gray-200 bg-stone-50 px-5 py-16 text-center">
          <h2 className="text-xl font-semibold">No products found</h2>
          <p className="mt-2 text-gray-600">Try a different search or clear your filters.</p>
          <button type="button" className="primary-action mt-5" onClick={clearFilters}>
            Clear filters
          </button>
        </section>
      ) : (
        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
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
    </div>
  );
}

export default ProductsPage;
