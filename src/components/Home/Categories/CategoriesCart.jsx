import Image from "next/image";



const CategoriesCart = ({ item }) => {
  const { id, category, icon, sub_category } = item;
 
  return (
    
        <div className="flex flex-col w-24 h-24 items-center justify-center  bg-green-400 rounded-xl">
      <div>
        <Image src={icon} width={30} height={30} alt={category}/>
      </div>
      <div>
        <h4 className="font-bold text-xs text-center ">{category}</h4>
      </div>
    </div>
   
  );
};

export default CategoriesCart;
