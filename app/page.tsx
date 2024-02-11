import MyHeader from "./components/Header";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

async function getData() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  // console.log(data);

  return (
    <div className=" ">
      <MyHeader />
      <SearchBar />
      <ProductCard products={data} />
    </div>
  );
}
