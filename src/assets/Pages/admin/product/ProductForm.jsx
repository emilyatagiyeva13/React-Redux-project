import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import "../../../css/admincss/productAdd.css";
import { useSelector } from 'react-redux';

const ProductForm = ({ formData, editData }) => {
    const allCategories = useSelector(p => p.category);
    const navigate = useNavigate();

    // State Hooks
    const [img, setImage] = useState(editData ? editData.img : "");
    const [title, setTitle] = useState(editData ? editData.title : "");
    const [description, setDesc] = useState(editData ? editData.description : "");
    const [stock, setStock] = useState(editData ? editData.stock : "");
    const [category, setCategory] = useState(editData ? editData.category : "");
    const [price, setPrice] = useState(editData ? editData.price : "");
    const [discountPrice, setDiscountPrice] = useState(editData ? editData.discountPrice : "");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !img || !price || !stock || !description || !category || category === "category") {
            Swal.fire({
                icon: "error",
                title: "Wait a moment...",
                text: "Please fill in all required fields and select a category!",
            });
            return;
        }

        formData({ 
            img, 
            title, 
            description, 
            stock, 
            category, 
            price, 
            discountPrice 
        });

        navigate('/dashboard/product');
    };

    return (
        <div className="container mt-2 d-flex justify-content-center p-5">
            <div className="card shadow p-4" style={{ maxWidth: '600px', width: '100%' }}>
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    
                    <div className="form-group">
                        <label className="form-label fw-bold">PRODUCT TITLE</label>
                        <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" placeholder="Enter product name" />
                    </div>

                    <div className="form-group">
                        <label className="form-label fw-bold">PRODUCT IMAGE URL</label>
                        <input value={img} onChange={e => setImage(e.target.value)} type="text" className="form-control" placeholder="https://example.com/image.jpg" />
                    </div>

                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">PRICE ($)</label>
                            <input value={price} onChange={e => setPrice(e.target.value)} type="number" step="0.01" className="form-control" placeholder="0.00" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold">DISCOUNT PRICE ($)</label>
                            <input value={discountPrice} onChange={e => setDiscountPrice(e.target.value)} type="number" step="0.01" className="form-control" placeholder="0.00" />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label fw-bold">STOCK QUANTITY</label>
                            <input value={stock} onChange={e => setStock(e.target.value)} type="number" className="form-control" placeholder="0" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label fw-bold">CATEGORY</label>
                        <select 
                            className="form-select" 
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            required
                        >
                            <option value="category" disabled>Select a category</option>
                            {allCategories.map(item => (
                                <option key={item.id} value={item.id}>
                                    {item.category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label fw-bold">DESCRIPTION</label>
                        <textarea value={description} onChange={e => setDesc(e.target.value)} className="form-control" rows="3" placeholder="Describe the product features..."></textarea>
                    </div>

                    <button type="submit" className="btn mt-3 py-2 w-100 fw-bold text-white shadow-sm" style={{ backgroundColor: "#BDEB69" }}>
                        {editData ? "UPDATE PRODUCT" : "ADD PRODUCT TO SYSTEM"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;