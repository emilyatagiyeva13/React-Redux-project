
import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../css/singleCard.css"
import { FaStar } from 'react-icons/fa';
import { useCart } from 'react-use-cart';
import { toast, ToastContainer } from 'react-toastify';

const SingleCard = ({ items }) => {
    // const discountAmount = (price * discountPercentage) / 100;
    // const finalPrice = (price - discountAmount).toFixed(2)
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
    return (
        <Col sm={12} md={3}>
            <Card className="card">
                <Card.Img variant="top" src={items.img} className='card-img' />
                <Card.Body>

                    <Card.Title className='d-flex align-items-center gap-1'>
                        <span className='fs-6 text-danger'>{items.title}</span>
                        <FaStar style={{ color: "#EAB308", fontSize: "14px" }} /><span style={{ color: "gray", fontSize: "13px" }}>({items.rating}) / 5</span>

                    </Card.Title>
                    <Card.Text style={{ fontWeight: "500" }}>
                        {items.description.length > 7 ? items.description.slice(0, 29) : items.description}...
                    </Card.Text>
                    <Card.Text className='card-price'>
                        <span> $ {items.discountPrice}  </span>
                        <span>{items.price}</span>

                    </Card.Text>
                    <ToastContainer />
                    <Link className="btn see-product add-to-cart ms-2" onClick={() => { addItem(alldata), notify() }}>+</Link>

                    <Link className="btn see-product ms-2" to={`/products/${items.id}`}>See product</Link>

                </Card.Body>

            </Card>
        </Col>

    )
}

export default SingleCard