import ProductDetails from "@/Components/ProductDetails";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return (
    <ProductDetails productId={resolvedParams.slug} />
  );
}
