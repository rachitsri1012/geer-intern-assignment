// app/products/page.js

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-3"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-blue-600 font-medium">{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
