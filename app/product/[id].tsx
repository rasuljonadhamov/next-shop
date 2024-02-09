async function getData(id: number) {
  const res = await fetch("https://api.escuelajs.co/api/v1/products" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getStaticProps({ params }) {
  try {
    const { id } = params;
    const productData = await getData(id);
    // ... rest of your code
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true }; // Or handle the error differently
  }
}

export default function ProductDetails({ product, notFound }) {
  if (notFound) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}
