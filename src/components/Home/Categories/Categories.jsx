"use client";
import { useEffect, useState } from "react";
import CategoriesCart from "./CategoriesCart";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section>
      <div className="flex justify-between w-[90%] mx-auto gap-5 overflow-hidden s">
        {categories.map((item) => (
          <CategoriesCart key={item.id} item={item}></CategoriesCart>
        ))}
      </div>
    </section>
  );
};

export default Categories;
