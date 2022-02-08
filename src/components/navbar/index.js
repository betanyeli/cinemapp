import React, { useState } from "react";
import CustomLink from "../customLink";
import { Box, Toolbar, IconButton, Menu, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from "@/hooks/useMediaQuery";
import { CustomAppBar } from "./styles";


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
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const isMobile = useMediaQuery('(max-width: 648px)')

    const renderMenuItem = () => {
        return routes.map(({ href, title }) => <MenuItem key={title}>
            <CustomLink href={href}>
                <Link
                    style={{ textDecoration: 'none', color: isMobile ? '#000' : '#fff', fontSize: 14 }}>
                    {title}
                </Link>
            </CustomLink>
        </MenuItem>)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <CustomAppBar position="fixed">
                <Toolbar>
                    {isMobile ? <><IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton><Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                            {renderMenuItem()}
                        </Menu></> : renderMenuItem()}
                </Toolbar>
            </CustomAppBar>
        </Box>
    );
};

export default Navbar;
