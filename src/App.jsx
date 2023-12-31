import { useState } from 'react'
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import Landing_Ani from "./assets/Landing_Ani.mp4"
import "./App.css"
import link from "./assets/link.gif"
import phoneGif from "./assets/phoneGif.png"
import music from "./assets/music.png"
import ServiceCard from './components/ServiceCard'
import OnlineCard from './components/OnlineCard'

function App() {

  return (
    <>

      {/* Navbar Start -------------------------------------------------------------------- */}

      <nav className="navbar navbar-expand-lg bg-color py-5 py-lg-5">
        <div className="container">
          <a className="navbar-brand text-white" href="/">Akash Maurya</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-capitalize" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-capitalize" href="/">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-capitalize" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar End -------------------------------------------------------------------- */}

      {/* Hero Section Start -------------------------------------------------------------------- */}
      <section className='bg-main bg-color hero-section'>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-start">
              <h1 className='text-capitalize fw-bolder text-white'> We Collect High Quality Leads </h1>
              <div>
                <p className='mt-3 mb-5 para-width text-light-grey'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem dicta esse illo recusandae ab asperiores nulla dolores obcaecati, delectus sunt quidem voluptatibus nobis modi alias! Animi accusamus omnis quasi asperiores at quisquam similique voluptate! </p>

                <div className="text-center w-100 text-md-start">
                  {/* Tooltip Start from React-Bootstrap Package */}
                  <OverlayTrigger
                    delay={{ hide: 450, show: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props}>
                        Contact Us
                      </Tooltip>
                    )}

                  ><button className='text-capitalize btn btn-primary px-5 py-2'>Contact Us</button>
                  </OverlayTrigger>
                  {/* Tooltip End */}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="text-center text-lg-end">
                <video src={Landing_Ani} className='hero-video--section' autoPlay muted loop> Depicting that we provide great features for websites. </video>
              </div>
            </div>
          </div>

        </div>
        {/* Custom Divider */}
        <div className="custom-shape-divider-bottom-1689672518">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
        {/* Custom Divider End */}
      </section>

      {/* Hero Section End -------------------------------------------------------------------- */}

      {/* Service Section Start -------------------------------------------------------------------- */}

      <section className="common-section business-section" id='online-section'>
        <div className="container text-center common-title fw-bold">
          <h2 className="common-heading text-capitalize">what we do for <br /> your business</h2>
          <hr className='w-25 mx-auto' />
        </div>

        {/* Service Cards */}
        <div className="container mb-5 mt-5">
          <div className="row g-5">


            <ServiceCard
              title="Link Building"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatibus sequi blanditiis"
              imgLink={link}
              imgAlt="Link"
            />
            <ServiceCard
              title="Link Building"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatibus sequi blanditiis"
              imgLink={link}
              imgAlt="Link"
            />
            <ServiceCard
              title="Link Building"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatibus sequi blanditiis"
              imgLink={link}
              imgAlt="Link"
            />
          </div>
        </div>
      </section>

      {/* Service Section End -------------------------------------------------------------------- */}

      {/* Paralax Section Start -------------------------------------------------------------------- */}
      <section className='bg-color more-info-section  '>
        <div className="container">
          <div className="row ">

            <div className="col-12 col-md-12 col-lg-6 img-section" >
              <figure className='d-flex justify-content-center align-items-center'>
                <img src={phoneGif} className='img-fluid' />
              </figure>
            </div>

            <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-start">
              <h1 className='text-capitalize fw-bolder text-white'> We Collect High Quality Leads </h1>
              <div>
                <p className='mt-3 mb-5 para-width text-light-grey'>Depicting that we provide great features for websites.
                </p>

                <div className="text-center w-100 text-md-start">
                  {/* Tooltip Start from React-Bootstrap Package */}
                  <OverlayTrigger
                    delay={{ hide: 450, show: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props}>
                        Contact Us
                      </Tooltip>
                    )}

                  ><button className='text-capitalize btn btn-primary px-5 py-2'>Contact Us</button>
                  </OverlayTrigger>
                  {/* Tooltip End */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Paralax Section End -------------------------------------------------------------------- */}
      {/* Online-Mod Section Start -------------------------------------------------------------------- */}

      <section className="services-section">
        <div className="container text-center common-title fw-bold">
          <h2 className="common-heading text-capitalize">Generating New Customers <br />Via Online Mode</h2>
          <hr className='w-25 mx-auto' />
        </div>

        <div className="container">
          <div className="row g-5">

            <OnlineCard
              imgAlt="Image"
              imgLink={music}
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nemo cum modi velit obcaecati ut quisquam aut quam excepturi autem delectus odit reiciendis ducimus quos."
              title="Image"
            />
            <OnlineCard
              imgAlt="Image"
              imgLink={music}
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nemo cum modi velit obcaecati ut quisquam aut quam excepturi autem delectus odit reiciendis ducimus quos."
              title="Image"
            />
            <OnlineCard
              imgAlt="Image"
              imgLink={music}
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nemo cum modi velit obcaecati ut quisquam aut quam excepturi autem delectus odit reiciendis ducimus quos."
              title="Image"
            />
            <OnlineCard
              imgAlt="Image"
              imgLink={music}
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nemo cum modi velit obcaecati ut quisquam aut quam excepturi autem delectus odit reiciendis ducimus quos."
              title="Image"
            />

          </div>
        </div>

      </section>
      {/* Online-Mod Section End -------------------------------------------------------------------- */}
      {/* Testimonail Section Start -------------------------------------------------------------------- */}
      <section className="common-section business-section" id='online-section'>
        <div className="container text-center common-title fw-bold">
          <h2 className="common-heading text-capitalize">what we do for <br /> your business</h2>
          <hr className='w-25 mx-auto' />
        </div>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={phoneGif} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={music} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      {/* Testimonail Section End -------------------------------------------------------------------- */}

    </>
  )
}

export default App