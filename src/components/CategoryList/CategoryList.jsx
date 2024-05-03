import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect( ()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])

    
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Job Category List  </h1>
           <div className="flex justify-between gap-6 my-14">
           {
                categories.map( category => <Category category={category}></Category> )
            }
           </div>
           
        </div>
    );
};

export default CategoryList;