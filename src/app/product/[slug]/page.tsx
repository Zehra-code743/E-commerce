// 





// src/app/product/[slug]/page.tsx
import ProductDetails from "@/Components/ProductDetails";

interface ProductPageProps {
  params: {
    slug: string; // You can change this type depending on what you're passing in the URL
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  return <ProductDetails productId={params.slug} />;
};

export default ProductPage;
