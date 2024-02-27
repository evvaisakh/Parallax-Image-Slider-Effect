import React from 'react'
import { Parallax } from 'react-parallax'
import Imgslider from './Imgslider'
import { Col, Container, Row } from 'react-bootstrap'

function Parallaximg() {
    return (
        <>
            <Parallax
                className="image"
                blur={0}
                bgImage="https://bmw.scene7.com/is/image/BMW/2560x1440:16to9?fmt=webp&wid=1504&hei=846"
                strength={800}
                bgImageStyle={{ height: '100%', width: '100%' }}
            >
                <div className="content">
                    <span className="img-text">Sheer Driving Pleasure.
                        <img
                            src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg"
                            width="35"
                            height="35"
                            className="d-inline-block"
                            alt="BMW logo"
                        />
                    </span>
                </div>
            </Parallax>
            <div className="text-box">
                <h3>SHOPPING TOOLS</h3>
                <h2><i style={{ height: '33px' }} className="fa-solid fa-magnifying-glass">&nbsp;FIND YOUR BMW</i></h2>
                <div className="d-flex justify-content-evenly align-items-center row">
                    <div className="search col-lg-4">
                        <img src="https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_STOCK_CAR?wid=1504&hei=542" alt="Find a New Car" width={'100%'} />
                        <h4>Find a New Car.</h4>
                        <button type="button" className="btn btn-outline-secondary rounded-1 fw-bolder">Search now</button>
                    </div>
                    <div className="drive col-lg-4">
                        <img src="https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_USED_CAR?wid=1504&hei=542" alt="Book a Test Drive" width={'100%'} />
                        <h4>Book a Test Drive.</h4>
                        <button type="button" className="btn btn-outline-secondary rounded-1 fw-bolder">Request a Test Drive</button>
                    </div>
                    <div className="config col-lg-4">
                        <img src="https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_CON?wid=1504&hei=542" alt="Build Your Own" width={'100%'} />
                        <h4>Build Your Own.</h4>
                        <button type="button" className="btn btn-outline-secondary rounded-1 fw-bolder">Configure & Price</button>
                    </div>
                </div>
            </div>
            <Imgslider />
            <Parallax
                className="image"
                blur={0}
                bgImage="https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/Images/Topics/Insights/Corporation/BMW%20Group%201680.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1514383901425.jpg"
                strength={800}
                bgImageStyle={{ height: '100%', width: '100%' }}
            >
            </Parallax>
            <Container>
                <Row className='my-3 py-1'>
                    <Col md={6}>
                        <img src="https://bmw.scene7.com/is/image/BMW/iX_Banner:16to9?fmt=webp&wid=1504&hei=846" alt="BMW Image" height={'100%'} width={'100%'} />
                    </Col>
                    <Col md={6} className='py-5'>
                        <h6 className='fw-bold'>BMW ELECTRIFIED</h6>
                        <h1 className='display-4'>THE JOY OF ELECTRIC DRIVING</h1>
                        <p>100 % electric. 100 % driving pleasure. 100 % BMW. Experience an entirely new sensation of sheer driving pleasure.</p>
                        <button type="button" className="btn btn-outline-secondary rounded-1 fw-bolder">Know More</button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='my-3 py-1'>
                    <Col md={6} className='py-5'>
                        <h6 className='fw-bold'>BMW FINANCIAL SERVICES</h6>
                        <h1 className='display-4'>BMW Special Offers</h1>
                        <p>Check out a variety of BMW finance offers available across the BMW range.</p>
                        <button type="button" className="btn btn-outline-secondary rounded-1 fw-bolder">Know More</button>
                    </Col>
                    <Col md={6}>
                        <img src="https://bmw.scene7.com/is/image/BMW/2560x1440:16to9?fmt=webp&wid=1504&hei=846" alt="BMW Image" height={'100%'} width={'100%'} />
                    </Col>
                </Row>
            </Container>
            <Parallax
                className="image"
                blur={0}
                bgImage="https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/Images/Topics/Insights/wearem/XM_Group_revised_with_logo.png/jcr:content/renditions/cq5dam.resized.img.1680.large.time1670222905096.png"
                strength={800}
                bgImageStyle={{ height: '100%', width: '100%' }}
            >
            </Parallax>
        </>
    )
}
export default Parallaximg