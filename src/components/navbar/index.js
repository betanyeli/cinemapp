import Reac, { useState } from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavLinkContainer
} from './navElements';
import Button from '../button';
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";




const routes = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'About us',
        href: '/about-us'
    },
    {
        title: 'Hire me',
        href: '/hire-me'
    },

]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Nav>
                <NavMenu>
                    {routes.map(({ title, href, index }) => {
                        return < NavLinkContainer key={title} >
                            <NavLink href={href} activeStyle>
                                <a>{title}</a>
                            </NavLink>
                        </NavLinkContainer>
                    })}
                </NavMenu>
                <Button title={null} onClick={() => setOpen(open ? false : true)} icon={open ? <FaAngleDoubleUp style={{ color: '#fff' }} /> : <FaAngleDoubleDown style={{ color: '#fff' }} />} />
                {open && <p>mostrar una cosa</p>}
            </Nav>
        </>
    );
};

export default Navbar;
