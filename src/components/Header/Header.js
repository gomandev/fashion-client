// core modules
import React from 'react';


//  components
import Navbar from '../common/navbar'
import Menu from '../common/menu'
import Hero from '../common/hero'

// helpers
// import { useOnClickOutside } from './hooks';



const Header = ({ siteTitle }) => {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef(); 

    // useOnClickOutside(node, () => setOpen(false));
    return (
        <>
            <div ref={node}>
                <Navbar open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <Hero />
        </>
    )
}

export default Header
