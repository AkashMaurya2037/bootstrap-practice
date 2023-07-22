import React from 'react'

const OnlineCard = ({ imgLink, imgAlt, paragraph, title }) => {
    return (
        <>
            <div className="col-12 col-lg-6 col-m-12">
                <div className="d-flex px-3 py-5 shadow">
                    <img src={imgLink} alt={imgAlt} className="d-md-block d-block d-none img-fluid mx-3" width="150px" />
                    <div>
                        <p className="mb-3 fw-bolder">{title}</p>
                        <p>{paragraph}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnlineCard