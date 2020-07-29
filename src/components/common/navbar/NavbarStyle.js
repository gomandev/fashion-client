import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
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
export const DropPanel = styled.div`
  width: 100%;
  background-color: #4047dc;
`
export const Icon = styled.span`
  padding: 12px 15px;
  background-color: #4047dc;
  border-radius: 50%;
  color: #fff;
`
export const Submenu = styled.div`
  position: absolute;
  width: 100%;
  z-index: 99;
  background: #fff;
  left: 0;top: 120%;
  visibility: hidden;
  opacity: 0;
  -webkit-box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  padding: 17px 0;
  border-top: 5px solid #4043bc;
  -webkit-transition: all .3s ease-out 0s;
  -moz-transition: all .3s ease-out 0s;
  -ms-transition: all .3s ease-out 0s;
  -o-transition: all .3s ease-out 0s;
  transition: all .3s ease-out 0s;
  ul {
    margin: auto !important;
  }
  li {
    display: flex;
  }
  a{
    padding: 6px 10px !important;
    font-size: 14px;
    color: #0b1c39;
    text-transform: capitalize;
    &hover{
      color: #ff5c97;
      background: none;
    }
  }
`

export const Logo = styled.img`
    width: 100%;
    max-width: 90px;
    height: 70px;
`
export const Nav = styled.nav`
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3; 

  @media (max-width: 991.98px) {
    background: transparent !important;
    
    top: 0; 
  }
`

export const Close = styled.button`
  padding: 2px 3px;
  border-radius: 50%;
  background: transparent;
  color: #fff;
  border: none;
  width: 15px;
  margin-left: 200px;
  margin-bottom: 50px;
  font-size: 1.5rem !important;
  
  display: none;
  @media (max-width: 768px) {
    display: flex;
    
  }
`

export const InnerUl = styled.ul`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 100%;
  li {
    color: #fff;
    margin-bottom: 20px;
    list-style: none !important;
  }
`

export const TogglerWrapper =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  background-color: #4047dc;
  transform: translateX(-100%);
`

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #4047dc;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 992px) {
    width: 100%;
  }


`;

export const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  margin-top: 20px;
  color:  #4047dc !important;
  font-size: 1.3rem;
  display: ${({ open }) => (open ? 'none' : 'flex')};
  @media (min-width: 768px) 
    display: flex !important; 
  }
  @media (min-width: 992px) {
    display: flex !important; 
  }
  @media (min-width: 1200px) {
    display: none !important; 
  }
`

export const Div = styled.div`
  @media (max-width: 768px) 
    display: none !important; 
  }
  @media (max-width: 992px) {
    display: none !important; 
  }
  @media (max-width: 1200px) {
    display: flex !important; 
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: row !important;
`



export const Links = styled.li`
display: flex;
`


export const LinkStyles = {
  fontSize: '12px',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  paddingLeft: '23px',
  paddingRight: '23px',
  fontWeight: '500',
  color: '#fff',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  position: 'relative',
  zIndex: '0',
  opacity: '1 !important'
}


