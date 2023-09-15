import { toast } from "react-hot-toast";

const addCategory = async (categoryData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    });

    if (res.ok) {
      const responseJson = await res.json();
      return responseJson;
    } else {
      console.log("Error:", res.statusText);
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

export default addCategory;
