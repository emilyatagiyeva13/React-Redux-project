import React, { useContext, useEffect, useState } from 'react'
import slider from "../../images/slider-01.webp"
import "../../css/home.css"
import { NavLink } from 'react-router-dom'
import { DotLoader, MoonLoader } from 'react-spinners'
import { ProductContext } from '../../context/ProductProvider'
import MultipleItems from '../../components/carousel'

const Home = () => {
    const [products] = useContext(ProductContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const myTimer = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(myTimer)
    }, [])

    if (loading) {
        return <div className="loader-container">
            <DotLoader color="#15803D" size={60} />
        </div>
    }
    return (
        <>
            <div className='slider'>
                <img src={slider} alt="" className='img-slider my-3' />

                <div className="blog">

                    <div className="banner-top d-flex align-items-center">

                        <span className="discount">-50%</span>

                        <br />

                        <div className='w-25'>Special discount for a limited number,<br />hurry and dont't miss out</div>

                    </div>

                    <div className="banner-middle">
                        <div className="h1 w-50">Curated marketplace <br /> collections built for  quality everyday living.</div>
                        <p className='w-50'> Carefully curated products from trusted sellers, designed to deliver quality, value, and a seamless shopping experience for everyday needs.  </p>
                    </div>

                    <div className="banner-bottom">
                        <NavLink to="/products" className="nav-link"><span>Shop now</span></NavLink>
                        <p>$ 24.99</p>
                        <p>With prices <br /> starting from</p>
                    </div>



                </div>
            </div>
            <MultipleItems  items={products}/>
        </>
    )
}

export default Home;