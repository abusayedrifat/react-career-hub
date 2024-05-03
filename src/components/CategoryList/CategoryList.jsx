import { useEffect, useState } from "react";


const CategoryList = () => {
    const [category, setCategory] = useState();

    useEffect( ()=>{
        fetch('/public/categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    } ,[])
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Job Category List</h1>
        </div>
    );
};

export default CategoryList;