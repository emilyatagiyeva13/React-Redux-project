import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { FaCartPlus } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SimpleSlider = ({ items }) => {
    const { addItem } = useCart();

    const notifyAdd = (itemName) => toast.success(`${itemName} added to cart!`, {
        position: "top-right",
        autoClose: 1500,
        theme: "colored",
    });

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="p-3 my-5">
            <ToastContainer />
            
            <Slider {...settings}>
                {items.map(item => (
                    <div key={item.id} className="px-2">
                        <Card className="h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                            <Link to={`/products/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card.Img 
                                    variant="top" 
                                    src={item.thumbnail} 
                                    style={{ height: '200px', objectFit: 'contain', padding: '10px' }} 
                                />
                            </Link>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-truncate" style={{fontSize: '30px', fontWeight: 'bold'}}>
                                    {item.title}
                                </Card.Title>
                                <Card.Text className="text-muted" style={{fontSize: '13px', flexGrow: 1}}>
                                    {item.category}
                                </Card.Text>
                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                    <span className="fw-bold fs-5">${item.price}</span>
                                    <Button 
                                        variant="success" 
                                        size="sm"
                                        onClick={() => {
                                            addItem(item);
                                            notifyAdd(item.title);
                                        }}
                                        className="d-flex align-items-center gap-1"
                                    >
                                        <FaCartPlus /> Add
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SimpleSlider;