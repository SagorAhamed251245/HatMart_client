import Link from "next/link";

 
const SubCategories = ({sub_category}) => {
    return (
        <div className=" shadow-2xl p-2 w-96 grid grid-cols-3 bg-white">
           {sub_category.map(item =>(
               
               <Link href={`/${item}`} key={sub_category}>
                  <div className="cursor-pointer">{item}</div>
               </Link> 
               
           ))}
        </div>
    );
};

export default SubCategories;