import React from 'react';

import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import VideoMetaverse from '../components/VideoMetaverse/VideoMetaverse.tsx'
import VideoRugby from '../components/VideoRugby/VideoRugby.tsx'
import VideoTennis from '../components/VideoTennis/VideoTennis.tsx'
import Video360 from '../components/Video360/Video360.tsx'

const Home = () => {
    return (
        <div>
            <VideoMetaverse />
            <Video360 />
                <Container>
                    
                    <Row style={{marginTop: '50px'}}>
                        <Col lg={6} md={6} sm={12}>
                            <VideoRugby />
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{color: 'white'}}>
                            <p>Feel the passion for sports in a more <strong>immersive way</strong>. Interact with your sports entity and <strong>move up levels</strong> where you can grow your club and your passion. <span style={{textDecoration: 'underline'}}>Live the emotion with Barqia Sports.</span></p>

                            <p>We are passionate about <strong>sports and technology</strong>. Barqia Sports wants to deliver you a more <strong>interactive and technological</strong> way to continue living sports to spread the same <strong>passion</strong> to you.</p>
                        </Col>

                        <Col lg={6} md={6} sm={12} style={{color: 'white', marginTop: '40px'}}>
                            <p>The <strong>immersive platform</strong> that offers fans the opportunity to create a closer bond with athletes and <strong>sports entities</strong>.</p>
                            <p>Offer <strong>innovative and technological</strong> services to your fans and they will return it to you.</p>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{marginTop: '40px'}}>
                            <VideoTennis />
                        </Col>
                            
                        <Col lg={12} md={12} sm={12} style={{color: 'white', lineHeight: '3em', margin: '50px 0 100px 0', textAlign: 'center'}}>
                            <h1 style={{lineHeight: '2em'}}>IF YOU ARE AN <strong>ATHLETE</strong> OR AN <strong>SPORT ENTITIY</strong>, WE INVITE YOU TO <a href='Contact'>ASOCIATE WITH US</a>...</h1>

                            <p>At Barqia Sports, one of our main objectives is to build strong, long-term partnerships with professional sports clubs and organisations. Our approach is to create a fully immersive plan that elevates the club to the highest engagement and sporting experience level.</p>
                        </Col>
                    </Row>
             </Container>
        </div>
    )
}

export default Home;