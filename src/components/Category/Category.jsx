import './category.css'

const Category = ({category}) => {
    const {availability, category_name, logo} = category;
    return (
        <div className="p-10 rounded-md bg-gradient-to-r from-[#9873ff0d] to-[#7e8ffe0d]">
           
           <img src={logo} className="p-3 rounded-md bg-gradient-to-r from-[#9873ff19] to-[#7e8ffe1a]" alt="" />
          
            <h1 className='text-xl font-bold mt-8'> {category_name} </h1>
            <p> {availability} </p>
        </div>
    );
};

export default Category;