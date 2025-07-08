export default async function Product({ params }: { params: { productId: string } }) {
  const { productId } = params;

  return <h1>Welcome to the product page! {productId}</h1>;
}
