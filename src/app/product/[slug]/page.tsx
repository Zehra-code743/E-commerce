import ProductDetails from "@/Components/ProductDetails";

const ProductPage = ({ params }: { params: { slug: string } }) => {
  return <ProductDetails productId={params.slug} />;
};

export default ProductPage;
