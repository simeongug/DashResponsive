import { Avatar, Box, Button, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React, { Fragment, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { DarkTheme } from '../../App';
import MenuIcon from '@mui/icons-material/Menu';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const HeaderAndDrawer = ({ setTogleSideBar, togleSideBar, handleMobNav }) => {

    let navigate = useNavigate()
    const [anchorElUser, setAnchorElUser] = useState(null);
    const darkTheme = useContext(DarkTheme)


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const routePage = (page) => {
        navigate(page)
    }
    const main_menu = [
        {
            route: '/',
            title: 'Home'
        },
        {
            route: '/customers',
            title: 'Customers'
        },
        {
            route: '/analytics',
            title: 'Analytics'
        },
        {
            route: '/setting',
            title: 'Setting'
        }
    ]
    return (
        <Fragment>
            <div className={togleSideBar ? 'side_nav togle_side_drawer' : 'side_nav'}>
                <nav className='h-100'>
                    <div className="nav_wrapper h-100">
                        <div className='side_nav_list h-100'>
                            <div className="side_bar_logo">
                                <div className="logo_icon d-flex align-items-center">
                                    <img src="./images/logo.png" alt="" />
                                    <h3>Brand</h3>
                                </div>
                            </div>
                            <div className="main_menu">
                                {
                                    main_menu.map((item, key) => {
                                        return (
                                            <div className='menu-item expandable_nav' data-tooltip={item.title}
                                                key={key}
                                                onClick={() => routePage(item.route)}

                                            >
                                                <div className="nav_content d-flex align-items-center">
                                                    <i className="fas fa-home-alt primary_icon"></i>
                                                    <div className="nav_item">
                                                        {item.title}
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="togle_button mob_hidden" onClick={() => setTogleSideBar(!togleSideBar)}>
                                <i className="fas fa-angle-left"></i>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className={togleSideBar ? 'appTopBar togle_top_bar' : 'appTopBar'}>
                <div className="left_actions">
                    <div className="md_hidden">

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleMobNav}
                            edge="start"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </div>

                <div className="right_actions d-flex align-items-center">
                    <div className="action_item my_outlined_btn ml-1">
                        <Button variant="outlined" startIcon={darkTheme[0] ? <Brightness7Icon /> : <NightsStayIcon />} onClick={() => darkTheme[1](!darkTheme[0])}>
                        </Button>
                    </div>
                    <div className="action_item ml-1">
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/images/user_profile.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                // sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                keepMounted
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderAndDrawer