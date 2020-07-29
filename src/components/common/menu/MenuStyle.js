import styled from 'styled-components'

export const StyledMenu = styled.nav`
  display: none !important;
  flex-direction: column;
  justify-content: start;
  background-color: #4047dc;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: 768px) {
    width: 60% !important;
    display: flex !important;
  }

  @media (max-width: 992px) {
    width: 40%;
    display: flex !important;
  }

  li {
    color: #fff;
    list-style: none;
  }


`;

export const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 99;
  background: #fff;
  left: 0;
  // top: 120%;
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

export const Close = styled.button`
  padding: 2px 3px;
  border-radius: 50%;
  background: transparent;
  color: #fff;
  border: none;
  width: 15px;
  margin-left: auto;
  font-size: 1.5rem !important;
  
  display: none;
  @media (max-width: 768px) {
    display: flex;
    
  }
  @media (max-width: 992px) {
    display: flex;
    
  }
`