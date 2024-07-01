import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductFeed from "@/components/ProductFeed";
import Head from "next/head";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await res.json();
  return products;
}

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto ">
        {/*Banner*/}
        <Banner />
        {/*Product feed*/}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

//GET https://fakestoreapi.com/products
