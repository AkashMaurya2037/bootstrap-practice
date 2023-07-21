import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa"

const ServiceCard = ({ title, paragraph, imgLink, imgAlt }) => {
    return (
        <>

            <div className="col-xxl-4 col-lg-4 col-md-12">
                <div className="text-center card-box rounded-2 p-5 ">
                    <img src={imgLink} alt={imgAlt} className='img-fluid' width="200px" />

                    <h5 className='my-3 fw-normal'>{title}</h5>

                    <p className='mb-5'>{paragraph}</p>

                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#service">
                            <FaArrowCircleRight className='icon-span rounded-circle d-flex justify-content-center align-items-center' />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceCard