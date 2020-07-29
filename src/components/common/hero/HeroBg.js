import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Container, HeroCaption, HeroBtn, HeroImg } from './HeroStyle'
import Img from '../../../images/hero_right.png'


const HeadView = () => (
  <HeroBg>
    <Container>
      {/* <Flex className="d-flex align-items-center">
        <Right className="col-lg-7 col-md-9">
         <HeroCaption>
            <h1>We Collect<br></br> High Quality Leads</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravi.</p>
            <HeroBtn>
              <Link to="industries.html" class="btn hero-btn">Contact Us</Link>
          </HeroBtn>
         </HeroCaption>
        </Right>
        <Left className="col-lg-5">
          <HeroImg class="d-none d-lg-block">
            <img src={Img} alt="" />
          </HeroImg>
        </Left>
      </Flex> */}
      <div style={{ marginTop: '5rem' }} class="row d-flex align-items-center">
        <div className="col-lg-7 col-md-9 ">
          <HeroCaption>
              <h1>We Collect<br></br> High Quality Leads</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravi.</p>
              <HeroBtn>
                <Link to="industries.html" className="btn hero-btn">Explore Your Idea</Link>
              </HeroBtn>
          </HeroCaption>
        </div>
        <div className="col-lg-5">
          <HeroImg className="d-none d-lg-block">
            <img src={Img} alt="" />
          </HeroImg>
        </div>
      </div>
    </Container>
  </HeroBg>
)

const HeroBg = styled.div`
  width: 100%;
  height: 750px;
  position: inherit;
  
  @media (max-width: 1199.98px) {

  }
  
  @media (max-width: 991.98px) {
      
      height: 600px; 
      
      div {
          height: 600px; 
      } 
  }
`

export default HeadView