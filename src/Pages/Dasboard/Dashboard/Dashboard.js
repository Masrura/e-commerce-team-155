import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Outlet,
    Link
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../hook/useAuth';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faIndustry, faStepForward, faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import DashboardHome from './DashboardHome';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
          
            {admin && <Box className="navbar-nav mt-auto mb-2 mb-lg-0 shadow-lg" sx={{backgroundColor : "#7258db", height : "100vh"}}>
                <Link to={`/dashboard/dashboardhome`}><a className='text-light'><FontAwesomeIcon icon={faHouseUser}/> Dashboard Home</a></Link><br/>
                <Link to={`/dashboard/makeAdmin`}><a className='text-light'><FontAwesomeIcon icon={faUserAltSlash}/> Make Admin</a></Link><br/>
                <Link to={`/dashboard/inventory`}><a className='text-light'><FontAwesomeIcon icon={faIndustry}/> Inventory</a></Link><br/>
                <Link to={`/dashboard/addproduct`}><a className='text-light'><FontAwesomeIcon icon={faStepForward}/> Add a product</a></Link><br/>
                <Link to={`/home`}><a className='text-light'><FontAwesomeIcon icon={faStepForward}/> Home</a></Link><br/>
            </Box>}

            {!admin && <Box className="navbar-nav mt-auto mb-2 mb-lg-0 shadow-lg" sx={{ backgroundColor: "#7258db", height: "100vh" }}>
                <Link to={`/dashboard/dashboardhome`}><a className='text-light'><FontAwesomeIcon icon={faHouseUser} /> MyOrders</a></Link><br />
                
                
            </Box>}
           
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>




            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Outlet></Outlet>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;