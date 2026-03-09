import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import "../css/header.css"
import { CiLight, CiLocationOn } from "react-icons/ci";
import { CiUser, CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { LuGitCompare } from "react-icons/lu";
import { FiTrendingDown } from "react-icons/fi";
import { BsPercent } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { useCart } from 'react-use-cart';

const Header = () => {
    const { totalItems } = useCart();
    return (
        <Navbar className="d-flex flex-column ">

            <Nav className='top-header '>
                <span>Free delivery & 40% Discount for next 3 orders! Place your 1st order in.</span>
            </Nav>

            <div className="top-section container">
                <div className="links d-flex gap-4">
                    <a href="#">About Us</a>
                    <a href="#">FAQ</a>
                    <a href="#">MY Account</a>
                    <a href="#">Order Tracking</a>
                    <span className='d-flex align-items-center'>
                        <FiTrendingDown />
                        <span className='mb-0 '>Order now and get it withing 15 min.!</span>
                    </span>
                </div>

                {/* <div className="log-in-section d-flex gap-2 my-2">
                    <NavLink to="login" className="login btn">Log in</NavLink>
                    <NavLink to="/signup" className="sign-up btn">Sign up</NavLink>
                </div> */}
            </div>

            <div className="supgor-button d-flex align-items-center container">

                <div className="logo">
                    <img src="https://klbtheme.com/supgor/wp-content/uploads/2025/10/logo-dark-2.png" alt="" width={150} />
                </div>

                <div className="location d-flex">
                    <CiLocationOn className='location-icon' />
                    <span className='d-flex flex-column'>
                        <b>All</b>
                        <span style={{ color: "gray", fontSize: "12px" }}>your location</span>
                    </span>
                </div>

                <div className="search-products-buttons d-flex my-5 align-items-center">

                    <input type="text" placeholder="Search popular products..." />

                    <div className="nav-right-icons d-flex gap-3">

                        <NavLink className="nav-link" to="/login"><CiUser className='icon' /></NavLink>
                        <><CiHeart className='icon' /><div className="icon-up-one">0</div></>
                        <LuGitCompare className='icon' />
                        <Link className='nav-link' to="/basket"><CiShoppingCart className='icon' /><span className="icon-up-two">{totalItems}</span></Link>
                        <CiLight className='icon' />

                    </div>

                    <div className="price-card d-flex flex-column">
                        <b>$0.00</b>
                        <span style={{ fontSize: "10px", color: "gray" }}>Your Cart</span>
                    </div>

                </div>



            </div>


            <>
                <Navbar.Collapse id="basic-navbar-nav" className='d-flex container border-top border-bottom'>
                    <Nav className="d-flex justify-content-start">
                        <NavLink to="/" className='nav-link'><div className="dropdown">
                            <div>Home <FiChevronDown /> </div>
                            <div className="dropdown-content my-4">
                                
                            </div>
                        </div>
                        </NavLink>
                        <NavLink to="/products" className='nav-link'>
                            <div className="dropdown">
                                <div>Shop <FiChevronDown /> </div>
                                {/* <div className="dropdown-content my-4">
                                    <div className="shop-list">
                                        <a to="/products">Shop Default</a>
                                        <a href="#">Shop Right Sidebar</a>
                                    </div>
                                </div> */}
                            </div></NavLink>
                        <NavLink to="*" className='nav-link'> Baverages</NavLink>
                        <NavLink to="*" className='nav-link'> Bakery</NavLink>
                        <NavLink to="*" className='nav-link'> Categories <FiChevronDown /></NavLink>
                        <NavLink to="/blog" className='nav-link'> Blog</NavLink>
                        <NavLink to="/contact" className='nav-link'> Contact</NavLink>
                    </Nav>
                    <Nav className='best-seller d-flex'>
                        <BsPercent />
                        <span>Best Seller</span>
                        <span>Sale</span>
                    </Nav>
                </Navbar.Collapse></>

        </Navbar>
    );
}

export default Header;