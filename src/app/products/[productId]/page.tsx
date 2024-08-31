

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h2>Details about product: {params.productId}</h2>;
}