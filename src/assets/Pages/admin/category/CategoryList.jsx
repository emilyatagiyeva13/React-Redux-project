import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../../../css/admincss/productList.css"
import { categoryDeleteAction } from '../../../../tools/actions/categoryActions';

const CategoryList = () => {
    const category = useSelector(p => p.category);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This category will be delete!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#BDEB69",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,delete!",
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(categoryDeleteAction(id));
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
            title: "Do you want edit the category?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#6fd855",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!",
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(`/dashboard/category/edit/${id}`);
            }
        });
    }

    return (
        <>
            <div className="container mt-3">
                <Link to="/dashboard" className='nav-link btn text-start w-25'>← GO TO DASHBOARD</Link>
            </div>

            <div className="container">
                <h1 className='text-center'>CATEGORY LIST</h1>
                <div className='d-flex justify-content-center mb-4'>
                    <Link className='btn btn-dark' to="/dashboard/category/add">ADD NEW CATEGORY</Link>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Title</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category && category.map((item, count) => (
                            <tr key={count}>
                                <th scope="row">{count + 1}</th>
                                <td>{item.category}</td>
                                <td>
                                    <p><Link className="btn" onClick={() => checkEdit(item.id)} >EDIT</Link></p>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CategoryList;