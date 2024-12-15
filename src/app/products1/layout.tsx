

export default async function Layout({ children } : { children: React.ReactNode }){
    const productsRes = await fetch("http://localhost:3001/products");
    const products = await productsRes.json();
    console.log({ products });
    return <>{children}</>
}