import { toast } from "react-hot-toast";

const addProduct = async (productData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Fixed the typo here
      },
      body: JSON.stringify(productData),
    });

    if (res.ok) {
      const responseJson = await res.json();
     
      toast.success("product is added");
    } else {
      console.log("Error:", res.statusText);
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

export default addProduct;
