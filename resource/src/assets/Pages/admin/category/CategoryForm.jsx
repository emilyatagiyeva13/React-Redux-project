import { useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const CategoryForm = ({ formData, editData }) => {
    const [category, setCategory] = useState(editData ? editData.category : "");

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editData) {
            if (!category) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please fill in all required fields!",
                });
                return;
            }
        }

        formData({
            category

        })

        Swal.fire({
            category: editData ? "CATEGORY EDITED SUCCESSFULLY!" : "CATEGORY ADDED SUCCESFULLY!",
            icon: "success",
            timer: 1500
        });

        navigate('/dashboard/category');
    };

    return (
        <div className="container mt-2 d-flex justify-content-center p-5">
            <div className="card shadow p-4" style={{ width: "500px", height: "400px" }}>
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <h3 className="text-center mb-3">
                        {editData ? "Edit Category" : "Add Category"}
                    </h3>

                    <div className="form-group">
                        <label className="form-label fw-bold">CATEGORY TITLE</label>
                        <input
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Vegetables..."
                        />
                    </div>



                    <button type="submit" className="btn mt-3 py-2 w-100 fw-bold text-white" style={{ backgroundColor: "#BDEB69" }}>
                        {editData ? "SAVE CHANGES" : "ADD CATEGORY"}
                    </button>
                    <Link className='btn btn-secondary' to="/dashboard/category">GO TO BACK CATEGORY LIST</Link>
                </form>
            </div>
        </div>
    );
};

export default CategoryForm;