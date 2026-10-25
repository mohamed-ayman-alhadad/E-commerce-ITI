import { Link } from "react-router-dom";

export default function CategoryCart({ item }) {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(item.name)}`}
      className="group flex min-w-[150px] flex-col items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white p-5 text-inherit no-underline transition-colors hover:border-gray-400 hover:bg-stone-50 sm:min-w-[180px]"
    >
      <img
        src={item.image}
        alt=""
        loading="lazy"
        className="h-14 w-14 object-contain transition-transform group-hover:scale-105"
      />
      <span className="text-center text-sm font-medium">{item.name}</span>
    </Link>
  );
}
