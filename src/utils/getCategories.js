import categories from '@/json/categories.json'
const getCategories = async () => {
    const res = await fetch(categories)
    return res.json()
};

export default getCategories;