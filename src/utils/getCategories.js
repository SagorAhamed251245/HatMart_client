import categories from '@/json/categories.json'
const getCategories = async () => {
    const res = await fetch(categories)
    const data =await res.json();
    return data
};

export default getCategories;