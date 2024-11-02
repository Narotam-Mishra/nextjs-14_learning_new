import Link from "next/link";

export default function Home(){
    return (
      <>
        <h1>Welcome to Home page!</h1>
        <Link href="/blog">Blog</Link><br />
        <Link href="/products">Products</Link><br />
        <Link href="/dashboard_rsc">Dashboard RSC</Link>
      </>
    );
}