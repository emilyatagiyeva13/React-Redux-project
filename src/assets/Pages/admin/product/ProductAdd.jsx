import { useDispatch } from "react-redux";
import "../../../css/admincss/productAdd.css";
import ProductForm from './ProductForm';
import { productAddAction } from "../../../../tools/actions/productActions";

const ProductAdd = () => {

    // const dispatch = useDispatch();

    return (

        <div className="container  mt-2 d-flex flex-column justify-content-center p-5">
            <h2 className="text-center mb-4">ADD NEW PRODUCT</h2>

            <ProductForm formData={(fetchData) => { productAddAction(fetchData) }} />
        </div>
    );
};

export default ProductAdd;