import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import "../../css/productDetails.css";
import { FaStar, FaShoppingCart, FaShieldAlt, FaArrowLeft } from 'react-icons/fa';
import { useCart } from 'react-use-cart';
import { toast, ToastContainer } from 'react-toastify';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addItem } = useCart();
    const notify = () => toast.success('Added to cart!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });;

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    if (loading) return (
        <div className="loader-container">
            <DotLoader color="#15803D" size={60} />
        </div>
    );


    return (
        <div className="container product-page py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                    <div className="product-image-wrapper">
                        <img src={product.thumbnail} alt={product.title} className="img-fluid main-img" />
                        <span className="badge-discount">-{product.discountPercentage}% OFF</span>
                    </div>
                    <button className="btn-back">
                        <FaArrowLeft /> <Link className="nav-link" to="/products"><span>Go to the cards</span></Link>
                    </button>
                </div>

                <div className="col-lg-6 product-info">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">{product.category}</li>
                            <li className="breadcrumb-item active">{product.brand}</li>
                        </ol>
                    </nav>

                    <h1 className="product-title">{product.title}</h1>

                    <div className="rating-box my-3">
                        <FaStar className="star-icon" />
                        <span className="rating-value">{product.rating}</span>
                        <span className="reviews-count">(120 Reviews)</span>
                    </div>

                    <div className="price-section">
                        <span className="current-price">${product.price}</span>
                        <span className="old-price">
                            ${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}
                        </span>
                    </div>

                    <p className="product-description mt-4">
                        {product.description}
                    </p>

                    <div className="features-list mt-4">
                        <div className="feature-item">
                            <FaShieldAlt /> <span>2 Year Warranty</span>
                        </div>
                    </div>

                    <div className="action-buttons mt-5">
                        <ToastContainer />
                        <button className="btn-add-to-cart" onClick={() => { addItem(product); notify(); }}>
                            <FaShoppingCart className="me-2" /> Add to Cart
                        </button>
                        <button className="btn-buy-now">
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;