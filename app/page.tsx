import MyHeader from "./components/Header";
import ProductCard from "./components/ProductCard";

async function getData() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <div className=" ">
      <MyHeader />
      <div className="block container px-4 mx-auto ">
        <input
          type="search"
          className="p-3 border-2 mt-28 rounded-lg"
          placeholder="Search..."
        />
      </div>

      <ProductCard products={data} />
    </div>
  );
}
