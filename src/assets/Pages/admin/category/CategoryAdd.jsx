import { useDispatch } from "react-redux";
import CategoryForm from './CategoryForm';
import { categoryAddAction } from "../../../../tools/actions/categoryActions";
import "../../../css/admincss/productAdd.css";
import { Link } from "react-router-dom";

const CategoryAdd = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="container mt-3">
                <Link to="/dashboard" className='nav-link btn text-start w-25'>← GO TO DASHBOARD</Link>
            </div>
            <div className="container mt-2 d-flex flex-column justify-content-center p-5">

                <CategoryForm
                    formData={(fetchData) => {
                        dispatch(categoryAddAction(fetchData))
                    }}
                />
            </div>
        </>
    );
};

export default CategoryAdd;