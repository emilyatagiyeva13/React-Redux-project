import React, { useEffect, useState } from 'react'
import "../../css/contac.css"
import { DotLoader, MoonLoader } from 'react-spinners';

const Contact = () => {

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
            <div className="header container my-4">

                <div className="group-1">
                    <h5>Fast Shipping</h5>
                    <p >Receive your order anywhere in the world</p>
                </div>
                <div className="group-2">
                    <h5>Return Policy</h5>
                    <p>Talk to our experts by chat or e-mail</p>
                </div>
                <div className="group-3">
                    <h5>Payment Security</h5>
                    <p>Don’t worry, all orders are processed securely</p>
                </div>
                <div className="group-4">
                    <h5>Fast Shipping</h5>
                    <p>Collect points and enjoy a host of benefits!</p>
                </div>


            </div>

            <div className="container input-fields my-5">
                <div className="our-stores ">

                    <h1>Our Stores</h1>
                    <p style={{ fontSize: "13px" }}>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga tresk dira. Ens biov dijevis.</p>

                    <div className="d-flex gap-5">
                        <div className="us d-flex flex-column">
                            <span style={{ fontSize: "10px", color: "gray" }}>UNITED STATES</span>
                            <h6>United States</h6>
                            <span>205 Middle Road, 2nd Floor, New York <br /> 2485</span>
                            <span>+02 1234 567 88</span>
                            <span>info@example.com</span>
                        </div>
                        <div className="nedherlands">
                            <span style={{ fontSize: "10px", color: "gray" }}>NEDHERLANDS</span>
                            <h6>Nedherlands</h6>
                            <span>205 Middle Road, 2nd Floor, New York <br /> 2485</span>
                            <span>+02 1234 567 88</span>
                            <span>info@example.com</span>
                        </div>
                    </div>

                </div>

                <div className="write-us-card d-flex gap-3 container flex-column">


                    <div>
                        <h4>Write us...</h4>
                        <span style={{ fontSize: "15px" }}>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen <br /> pasam inte loba även om prerade i garanterad traditionell specialitet till bebel.</span>
                    </div>

                    <div className="d-flex gap-5">
                        <div className="your-name">
                            <p className='fs-6'>Your name *</p>
                            <input type="text" />
                        </div>
                        <div className="your-name">
                            <p className='fs-6'>Your email *</p>
                            <input type="email" />
                        </div>
                    </div>

                    <div className="d-flex
                    flex-column">
                        <p className="fs-6">Subject *</p>
                        <input type="text" name="" id="" style={{ width: "370px" }} />
                    </div>

                    <div className="d-flex">
                        <textarea name="" id="" rows={3} cols={45}></textarea>
                    </div>


                    <div className="send-me">
                        <span>Send message</span>
                    </div>




                </div>
            </div>



        </>

    )
}

export default Contact