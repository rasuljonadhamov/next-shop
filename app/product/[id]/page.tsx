import MyHeader from "@/app/components/Header";

async function getData() {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
  return res.json();
}

export default async function ProductDetails({ params }) {
  const id = Number(params.id);
  const data = await getData();

  const product = data.find((p) => p.id === id);

  console.log(product);

  // if (!product) {
  //   return (
  //     <div>
  //       <h2>Product not found</h2>
  //     </div>
  //   );
  // }

  return (
    <>
        <MyHeader />
      <div key={product.id} className="mt-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="flex justify-center">
            <img
              className="w-full h-auto rounded-lg shadow-md"
              src={product.images[0]}
              alt={product.title}
            />
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <span className="text-lg font-semibold">
              Price: ${product.price}
            </span>
            <span className="text-sm text-gray-600">
              Category: {product.category.name}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
