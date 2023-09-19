import EcoFriendlyProducts from "@/components/Home/Products/EcoFriendlyProducts/EcoFriendlyProducts";
import getProducts from "@/utils/getProducts";

const ecoFriendlyProductsPage = async () => {
  const products = await getProducts();
  return (
    <>
      <section className="w-[90%] mx-auto">
        <EcoFriendlyProducts products={products} />
      </section>
    </>
  );
};

export default ecoFriendlyProductsPage;
