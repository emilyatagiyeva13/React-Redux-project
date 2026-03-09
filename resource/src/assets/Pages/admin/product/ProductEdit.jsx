import { useDispatch, useSelector } from "react-redux";
import "../../../css/admincss/productAdd.css";
import ProductForm from './ProductForm';
import { editProduct } from "../../../../tools/actions/productActions";
import { Link, useParams } from "react-router-dom";
import { DotLoader } from "react-spinners";

const ProductEdit = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector(p => p.product);
    const findProduct = product.find(p => p.id == id)

    return (

        <>
            {findProduct ? <div>
                <div>
                    <div><Link to="/dashboard" className='nav-link btn'>Go to dashboard</Link></div>
                </div>
                <div className="container  mt-2 d-flex flex-column justify-content-center align-items-center p-5">
                    <h2 className="text-center">EDIT PRODUCT</h2>
                    <ProductForm editData={findProduct} formData={(fetchData) => { dispatch(editProduct(findProduct.id, fetchData)) }} />
                </div>
            </div> : <div className="loader-container">
                <DotLoader color="#15803D" size={60} />
            </div>}
        </>
    );
};

export default ProductEdit;