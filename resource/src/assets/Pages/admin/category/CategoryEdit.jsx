import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { editCategory } from "../../../../tools/actions/categoryActions";
import CategoryForm from "./CategoryForm";



const CategoryEdit = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const category = useSelector(p => p.category);
    const findCategory = category.find(p => p.id == id)

    return (

        <>
            {findCategory ? <div>
                <div>
                    <div><Link to="/dashboard" className='nav-link btn'>Go to dashboard</Link></div>
                </div>
                <div className="container  mt-2 d-flex flex-column justify-content-center align-items-center p-5">
                    <CategoryForm editData={findCategory} formData={(fetchData) => { dispatch(editCategory(findCategory.id, fetchData)) }} />
                </div>
            </div> : <div className="loader-container">
                <DotLoader color="#15803D" size={60} />
            </div>}
        </>
    );
};

export default CategoryEdit;