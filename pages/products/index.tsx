import Head from 'next/head';
// components
import ProductsTable from './Table';

export default function Products() {
  return (
    <div className="bg-[#FFFCF0] h-[100vh] p-8">
      <Head>
        <title>Products | Next SPA</title>
      </Head>
      <h1 className="text-2xl mb-8">Products</h1>
      <ProductsTable />
    </div>
  );
}
