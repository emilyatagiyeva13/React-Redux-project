import React from 'react';
import "../css/footer.css"; 

const Footer = () => {
    return (
        <footer className="py-5 bg-light border-top">
            <div className="container">
                {/* 1. Üst Bölüm: Newsletter */}
                <div className="row align-items-center mb-5 pb-4 border-bottom">
                    <div className="col-lg-7">
                        <h2 className="fw-bolder">Join the Supgor Club!</h2>
                        <p className="text-muted">
                            Whether you’re welcoming new contacts or sharing the latest news,<br />
                            you can make your business look good in just a few clicks.
                        </p>
                    </div>
                    <div className="col-lg-5">
                        <form>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <input
                                    id="newsletter1"
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email address"
                                />
                                <button
                                    className="btn text-white px-4"
                                    type="button"
                                    style={{ backgroundColor: "#064C50" }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* 2. Alt Bölüm: Linklər və Məlumat */}
                <div className="row">
                    {/* Logo və Ünvan */}
                    <div className="col-md-3 mb-4">
                        <img
                            src="https://klbtheme.com/supgor/wp-content/uploads/2025/10/logo-dark-2.png"
                            alt="Supgor Logo"
                            width={150}
                            className="mb-3"
                        />
                        <p className="text-muted small">
                            75 Hoel Trok Station Road, Cardiff, UK<br />
                            United Kingdom
                        </p>
                        <p className="fw-bold" style={{ color: "#064C50" }}>
                            info@example.com
                        </p>
                    </div>

                    {/* Link Sütunları */}
                    <div className="col-md-9">
                        <div className="row">
                            {/* Get to know us */}
                            <div className="col-6 col-sm-4 col-md-3 mb-3">
                                <h5>Get to know us</h5>
                                <ul className="nav flex-column">
                                    {['Careers', 'About', 'Investor Relations', 'Devices', 'Reviews'].map(link => (
                                        <li key={link} className="nav-item mb-2">
                                            <a href="#" className="nav-link p-0 text-muted small">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Let us help you */}
                            <div className="col-6 col-sm-4 col-md-3 mb-3">
                                <h5>Let us help you</h5>
                                <ul className="nav flex-column">
                                    {['Orders', 'Returns', 'Shipping', 'Privacy', 'FAQ'].map(link => (
                                        <li key={link} className="nav-item mb-2">
                                            <a href="#" className="nav-link p-0 text-muted small">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Make money */}
                            <div className="col-6 col-sm-4 col-md-3 mb-3">
                                <h5>Make money</h5>
                                <ul className="nav flex-column">
                                    {['Sell on Supgor', 'Affiliate', 'Advertise'].map(link => (
                                        <li key={link} className="nav-item mb-2">
                                            <a href="#" className="nav-link p-0 text-muted small">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* For buyers */}
                            <div className="col-6 col-sm-4 col-md-3 mb-3">
                                <h5>For buyers</h5>
                                <ul className="nav flex-column">
                                    {['FAQ', 'Track Order', 'Contact'].map(link => (
                                        <li key={link} className="nav-item mb-2">
                                            <a href="#" className="nav-link p-0 text-muted small">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;