import { products } from "@/store";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      Products page
      <div>
        {products.map((product) => (
          <Link key={product.id} href={`/groceries/en-GB/products/${product.id}`} className="m-4 bg-indigo-400 border-solid rounded-4xl">
            <p>{product.name}</p>
            {/* ternery operator */}
            {product.inStock ? <p className="text-green-400">In Stock</p> : <p className="text-red-500">Out of stock</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}