import { useState } from 'react'
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import Landing_Ani from "./assets/Landing_Ani.mp4"
import "./App.css"

function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">Akash Maurya</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Features</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className='bg-main bg-color hero-section'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-start">
              <h1 className='text-capitalize fw-bolder '> We Collect High Quality Leads </h1>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem dicta esse illo recusandae ab asperiores nulla dolores obcaecati, delectus sunt quidem voluptatibus nobis modi alias! Animi accusamus omnis quasi asperiores at quisquam similique voluptate!

                <div className="text-center">
                  <OverlayTrigger
                    delay={{ hide: 450, show: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props}>
                        Contact Us
                      </Tooltip>
                    )}

                  ><button className='text-capitalize'>Contact Us</button>
                  </OverlayTrigger>,
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="text-center">
                <video src={Landing_Ani} className='hero-video--section' autoPlay muted loop width={600}> Depicting that we provide great features for websites. </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App