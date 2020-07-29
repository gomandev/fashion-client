import styled from 'styled-components'

export const Container = styled.div`
    max-width: 90%;
    margin: auto;
    overflow: hidden;
    // width: 100%;
    // padding-right: 15px;
    // padding-left: 15px;
    // margin-right: auto;
    // margin-left: auto; 
    // @media (min-width: 576px) {
    //     max-width: 540px; 
    // } 
    // @media (min-width: 768px) 
    //     max-width: 720px; 
    // }
    // @media (min-width: 992px) {
    //     max-width: 960px; 
    // }
    // @media (min-width: 1200px) {
    //     max-width: 1140px; 
    // }

`

export const HeroWrapper = styled.div`
    width: 100%;
    height: 850px;
    position: inherit;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center; 

    @media (max-width: 1199.98px) {


    
        background-position: center
         center !important; 
    
    }
    .
    @media (max-width: 991.98px) {
        
        height: 1150px; 
        
        div {
            height: 1150px; 
        } 
    }
`
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    opacity: .3;
    background: #000000;
    height: 850px; 
`
export const WrapRow = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
    margin-top: 1.5rem !important;
`

export const Flex = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`

export const Left = styled.div`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 41.66667%;
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`

export const Right = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 58.33333%;
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
`

export const HeroCaption = styled.div`
    position: relative;
    @media (max-width: 767px){
        padding-top:17px
    }
    &before{
        background-image:url();
        position:absolute;
        content:"";
        top:0;
        z-index:-1;
        min-height:20px;
        min-width:20px;
        background-repeat:no-repeat;
        left:339px;
        top:-70px;
        animation: heartbeat 1s infinite alternate;
    }
    @media only screen and (min-width: 1200px) and (max-width: 1600px){
        &before{
            top:-30px
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 991px){
        &before{
            top:-30px
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 767px){
        &before{
            top:-30px
        }
    }
    @media (max-width: 767px){
        &before{
            left:248px;
            top:-10px;
        }
    }
    @-webkit-keyframes heartbeat{
        to{
            -webkit-transform:scale(1.5);
            transform:scale(1.5);
        }
    }
    &after{
        background-image: url();
        position: absolute;
        content: "";
        z-index: -1;
        min-height: 20px;
        min-width: 20px;
        background-repeat: no-repeat;
        left: 285px;
        bottom: -79px;
        animation: heartbeat 1s infinite alternate
    }
    @media only screen and (min-width: 1200px) and (max-width: 1600px){
        &after{
            bottom:-30px
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 991px){
        &after{
            bottom:-30px
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 767px){
        &after{
            bottom:-30px
        }
    }
    @-webkit-keyframes heartbeat{
        to{
            -webkit-transform:scale(1.5);transform:scale(1.5)
        }
    }
    h1{
        font-size:65px;
        font-weight:700;
        margin-bottom:14px;
        color:#2b4b80;
        font-family:"Poppins",sans-serif;
        line-height:1.2;
        text-transform:capitalize;
        margin-bottom:40px;
    }
    @media only screen and (min-width: 992px) and (max-width: 1199px){
        h1{
            font-size:55px;
            line-height:1.2
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 991px){
        h1{
            font-size:50px;
            line-height:1.2;
        }
    }
    @media (max-width: 767px){
        h1{
            font-size:29px;
            line-height:1.4;
        }
    }
    p{
        margin-bottom:54px;
        padding-right:155px;
    }
    @media only screen and (min-width: 768px) and (max-width: 991px){
        p{
            margin-bottom:54px;
            padding-right:0px
        }
    }
    @media (max-width: 767px){
        p{
            margin-bottom:54px;
            padding-right:0px;
        }
    }
`

export const HeroBtn = styled.div`
    .hero-btn {
        -webkit-box-shadow: 0 1rem 3rem rgba(56, 5, 49, 0.175) !important;
        box-shadow: 0 1rem 3rem rgba(66, 5, 58, 0.175) !important;
    }
`

export const HeroImg = styled.div`
    img{
        max-width:534px;
        max-height:607px;
    }
    @media only screen and (min-width: 992px) and (max-width: 1199px){
        img{
            max-width:386px;
        }
    }
`