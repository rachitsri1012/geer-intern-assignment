// app/api/products/route.js

export async function GET() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$59.99",
      image: "https://via.placeholder.com/200x200?text=Headphones"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$99.99",
      image: "https://via.placeholder.com/200x200?text=Smart+Watch"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: "$39.99",
      image: "https://via.placeholder.com/200x200?text=Speaker"
    }
  ];

  return Response.json(products);
}
