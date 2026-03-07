import React from 'react';
import { Button } from 'react-bootstrap';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import "../../css/basket.css"; 

const Basket = () => {
    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart
    } = useCart();
    
    const handleRemoveItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to remove this item from cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                removeItem(id);
                notifyRemove();
            }
        });
    }

    const handleEmptyCart = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to clear the whole cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, clear it!"
        }).then((result) => {
            if (result.isConfirmed) {
                emptyCart();
                Swal.fire("Deleted!", "Your cart has been emptied.", "success");
            }
        });
    }

    const notifyUpdate = () => toast.info('Cart updated!', {
        position: "top-right",
        autoClose: 1000,
        theme: "colored",
    });

    const notifyRemove = () => toast.warn('Removed from cart', {
        position: "top-right",
        autoClose: 1000,
        theme: "colored",
    });

    // Səbət boşdursa
    if (isEmpty) {
        return (
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '60vh' }}>
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-6763401.png"
                    alt="Empty Cart"
                    width={250}
                    className="mb-4"
                />
                <h3 className="mb-4 fw-bold text-dark">Your cart is empty!</h3>
                <Link to="/products" className='btn btn-success' style={{backgroundColor:"#064C50", border:"none", padding: "10px 20px", borderRadius: "10px"}}>Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <ToastContainer />
            <h2 className="display-6 fw-bold mb-5 text-dark">Shopping Cart</h2>
            
            <div className="row">
                <div className="col-lg-8">
                    {items.map((item) => (
                        <div key={item.id} className="row align-items-center py-4 border-bottom">
                            <div className="col-3 col-md-2">
                                <img src={item.thumbnail} alt={item.title} className="img-fluid rounded-3" style={{objectFit: 'cover', height: '100px', width: '100px'}} />
                            </div>
                            
                            <div className="col-9 col-md-5">
                                <h5 className="fw-bold text-dark">{item.title}</h5>
                                <p className="text-muted mb-2 text-capitalize">{item.category}</p>
                                <p className="fw-bold fs-5 text-dark">${item.price.toFixed(2)}</p>
                            </div>

                            <div className="col-12 col-md-5 mt-3 mt-md-0 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center border rounded-pill overflow-hidden bg-white">
                                    <Button variant="light" size="sm" className="px-3" onClick={() => item.quantity > 1 ? (updateItemQuantity(item.id, item.quantity - 1), notifyUpdate()) : handleRemoveItem(item.id)}>-</Button>
                                    <span className="px-3 fw-bold fs-6">{item.quantity}</span>
                                    <Button variant="light" size="sm" className="px-3" onClick={() => { updateItemQuantity(item.id, item.quantity + 1), notifyUpdate() }}>+</Button>
                                </div>
                                
                                <Button variant='danger' className="rounded-circle d-flex align-items-center justify-content-center" style={{width:"40px", height:"40px",fontSize:"80px"}} onClick={() => handleRemoveItem(item.id)}>
                                    <MdDeleteOutline />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-lg-4 mt-5 mt-lg-0">
                    <div className="border p-4 rounded-3 bg-light" style={{position: "sticky", top: "20px"}}>
                        <h4 className="fw-bold mb-4 text-dark">Order Summary</h4>
                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Subtotal</span>
                            <span className="fw-bold text-dark">${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Shipping</span>
                            <span className="fw-bold text-success">Free</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mb-4">
                            <span className="fw-bold fs-5 text-dark">Total</span>
                            <span className="fw-bold fs-5 text-dark">${cartTotal.toFixed(2)}</span>
                        </div>
                        <Button className='w-100 py-2 fw-bold' style={{backgroundColor:"#064C50", border:"none", borderRadius:"8px"}}>
                            Proceed to Checkout
                        </Button>
                        <Button onClick={handleEmptyCart} variant="outline-danger" className='w-100 mt-2 rounded-3 fw-bold'>
                            Clear Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;