import ViewDetails from "@/components/Dashboard/Admin/AllProducts/ViewDetailsProducts/ViewDetails";
import getSingleProduct from "@/utils/getSingleProduct";


const page = async ({ params }) => {
  const productData = await getSingleProduct(params.id);

  return (
    <div>
      <ViewDetails productData={productData} id={params.id} />
    </div>
  );
};

export default page;
