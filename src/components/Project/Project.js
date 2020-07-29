import React from 'react'
import styled from 'styled-components'
import img from '../../images/have.jpg'

const Project = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <HaveAproject style={{ backgroundImage: `url(${img})` }}>
                        <div class="row d-flex align-items-center">
                            <div class="col-xl-7 col-lg-9 col-md-12">
                                <Work>
                                    <h2>Have project in mind?</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut.</p>
                                </Work>
                            </div>
                            <div class="col-xl-5 col-lg-3 col-md-12">
                                <Btn class="f-right">
                                    <a href="#" class="btn btn-ans">Contact Us</a>
                                </Btn>
                            </div>
                        </div>
                    </HaveAproject>
                </Container>
            </Wrapper>
        </>
    )
}

export const Container = styled.div`
  width: 70%;
  margin: auto;
  overflow: hidden;
   
`

export const HaveAproject = styled.div`
    padding:64px 69px 54px 78px;
    background-repeat:no-repeat;
    border-radius:10px;
    position:relative;
  
  @media only screen and (min-width: 768px) and (max-width: 991px){
      
    padding:42px 69px 36px 57px;
    
  }
  @media only screen and (min-width: 576px) and (max-width: 767px){
      
    padding:42px 19px 36px 40px;
  }
  @media (max-width: 767px){
      
    padding:42px 19px 36px 40px;
  }
    &:before{
        position:absolute;
        width:100%;
        height:100%;
        bottom:0;
        left:0;
        content:"";
        border-radius:10px;
        opacity:0.95;
        background-image:-moz-linear-gradient(0deg, #ff5c98 0%, #7b40c0 100%);
        background-image:-webkit-linear-gradient(0deg, #ff5c98 0%, #7b40c0 100%);
        background-image:-ms-linear-gradient(0deg, #ff5c98 0%, #7b40c0 100%)
    }
`

export const Work = styled.div`
    h2{
        color:#fff;
        font-size:40px;
        font-weight:700;
        line-height:1.4;
        margin-bottom:13px;
    }
    @media only screen and (min-width: 576px) and (max-width: 767px){
        h2{
            padding-right:20px;
            margin-bottom:18px;
        }
    }
    @media (max-width: 767px){
        h2{
            margin-bottom:18px;
            font-size:31px;
        }
    }
    p{
        color:#fff;
    }
    @media only screen and (min-width: 992px) and (max-width: 1199px){
        p{
            padding-right:20px;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 991px){
        p{
            padding-right:20px;
            margin-bottom:30px;
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 767px){
       p{
           margin-bottom:30px;
        }
    }
    @media (max-width: 767px){
        p{
            margin-bottom:30px;
            font-size:15px;
        }
    }
    
`

export const Btn = styled.div`
    @media only screen and (min-width: 768px) and (max-width: 991px){
        float:left;
    }
    @media only screen and (min-width: 576px) and (max-width: 767px){
        float:left;
    }
    @media (max-width: 767px){
        float:left;
    }
`

export const Wrapper = styled.div`

`

export default Project
