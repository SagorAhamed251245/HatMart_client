const addProduct = async (productData) => {
  try {
    const res = await fetch(
      `https://hatmart-server.vercel.app/api/v1/auth/product`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Fixed the typo here
        },
        body: JSON.stringify(productData),
      }
    );

    if (res.ok) {
      const responseJson = await res.json();
      console.log("Product added:", responseJson);
    } else {
      console.log("Error:", res.statusText);
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

export default addProduct;
