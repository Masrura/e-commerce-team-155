import React from 'react';
import { Container } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { Button, CssBaseline, Divider, Drawer, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
const Dashboard = (props) => {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { window } = props;
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;
    const drawerWidth = 200;
    const drawer = (
        <div style={{ background: '#333', height: '100vh' }}>
            <Toolbar />
            <Divider />
            {
                admin ?

                    <Box>
                        <Link to={`/makeadmin`}> <Button style={{ color: '#b7c0cd', paddingTop: '40px' }}>Make Admin</Button></Link><br />
                        <Link to={`/addProduct`}><Button style={{ color: '#b7c0cd', padding: '40px' }}>Add Product To Inventory</Button></Link><br />
                        <Link to={`/inventory`}><Button style={{ color: '#b7c0cd', padding: '40px' }}>Inventory</Button></Link><br />
                    </Box>
                    :
                    <Box>
                        <Link to={`/payment`}><Button style={{ color: '#b7c0cd', padding: '40px' }}>Payment</Button></Link><br />
                        <Link to={`/myordars`}><Button style={{ color: '#b7c0cd', padding: '40px' }}>My Orders</Button></Link><br />
                        <Link to={`/review`}><Button style={{ color: '#b7c0cd', padding: '40px' }}>Review</Button></Link><br />
                    </Box>
            }
            <Button style={{ color: '#b7c0cd', padding: '40px' }}>Logout</Button>
            <Link to="/home"><Button style={{ color: '#b7c0cd', padding: '40px' }}>Home</Button></Link>

        </div>
    );
    return (
        <Container>
            <Box sx={{ display: 'flex', }}>
                <CssBaseline />

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
            </Box>
        </Container>
    );
};

export default Dashboard;