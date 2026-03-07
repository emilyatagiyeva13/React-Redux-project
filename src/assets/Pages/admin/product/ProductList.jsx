import { useState, useEffect } from 'react'; // State və Effect əlavə olundu
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../../../tools/actions/productActions';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../../../css/admincss/productList.css";
import { FaArrowUp } from 'react-icons/fa'; // İkon üçün (npm install react-icons)

const ProductList = () => {
    const product = useSelector(p => p.product);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);

    // SCROLL TO TOP*****************

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

     // SCROLL TO TOP******************





    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This will be delete",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#BDEB69",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete!!",
            cancelButtonText: "No!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProduct(id));
                Swal.fire({
                    title: "DELETED!",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        });
    };

    const checkEdit = (id) => {
        Swal.fire({
            title: "Edit product?",
            text: "You will edit this product details.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#6fd855",
            confirmButtonText: "Sure, edit!",
            cancelButtonText: "No!"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(`/dashboard/product/edit/${id}`);
            }
        });
    }

    return (
        <>
            {product ? (
                <div className="position-relative">
                    <div><Link to="/dashboard" className='nav-link btn'>Go to dashboard</Link></div>
                    <div>
                        <h1 className='text-center'>PRODUCT LIST</h1>
                        <div className='d-flex justify-content-center mb-4'>
                            <Link className='btn btn-dark' to="/dashboard/product/add">Add product</Link>
                        </div>
                    </div>

                    <table className="table container">
                        <thead>
                            <tr>
                                <th scope="col">№</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.map((item, count) => (
                                <tr key={item.id}>
                                    <th scope="row">{count + 1}</th>
                                    <td><img src={item.img} width={100} alt={item.title} /></td>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td><button className="btn" onClick={() => checkEdit(item.id)} >EDIT</button></td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {isVisible && (
                        <div
                            onClick={scrollToTop}
                            style={{
                                position: 'fixed',
                                bottom: '20px',
                                right: '20px',
                                backgroundColor: '#BDEB69',
                                color: 'white',
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                zIndex: 1000
                            }}
                        >
                            <FaArrowUp />
                        </div>
                    )}
                </div>
            ) : (
                <div className="loader-container text-center mt-5">
                    <span>Loading...</span>
                </div>
            )}
        </>
    );
}

export default ProductList;