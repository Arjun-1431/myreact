import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AdminSidebar from './SubComponents/AdminSidebar';
import MaterialTable, { MTableToolbar } from 'material-table';
import { Button } from '@mui/material';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from "axios";
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AllUserDetails() {

  const [allusers, setAllUsers] = useState([]);

   
  useEffect(() => {
    axios.get('http://localhost:5000/getAllUsers')
        .then(response => {
          setAllUsers(response.data);
            
        })
        .catch(error => {
            console.log(error);
        });
}, []);

const handleDelete = (id) => {
  if (!id) {
    console.error("ID is undefined or null");
    return;
  }

  axios.delete(`http://localhost:5000/deleteUser/${id}`)
    .then(response => {
      Swal.fire({
        icon: "success",
        title: "Success...",
        text: "User Deleted Successfully",
      });
      console.log("User deleted successfully:", response.data);
      // Update the state to reflect the deletion
      setAllUsers(prevUsers => prevUsers.filter(user => user._id !== id));
    })
    .catch(err => {
      console.error("Error deleting user:", err);
      if (err.response) {
        console.error("Server responded with status:", err.response.status);
        console.error("Response data:", err.response.data);
      } else {
        console.error("Failed to connect to server");
      }
      // Handle error (e.g., show an error message)
    });
};



  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', width:'100vw',height:'100vh' }}>
        <CssBaseline />
        <AppBar position="absolute" sx={{background:'white'}} open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                width:'20px',
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="GrayText"
              noWrap
              sx={{ flexGrow: 1 }}
            >
             Admin Dashboard
            </Typography>
            
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
          <AdminSidebar/>
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              
              
              
              <Grid item xs={12}>
                <Paper sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    
                  }}>
                   <MaterialTable
                            title="Event Booking Details"
                            columns={[
                                { title: 'User Name', field: 'username' },
                                { title: 'Email ID', field: 'emailId' },
                                { title: 'Contect', field: 'contect' },
                               
                            ]}
                            data={allusers.map((user) => ({
                                _id: user._id,
                                username: user.username,
                                emailId: user.emailId,
                                contect: user.contect,
                                
                                
                            }))}
                            actions={[
                                {
                                    icon: 'delete',
                                    tooltip: 'Delete User',
                                    onClick: (allusers, rowData) => handleDelete(rowData._id),
                                }
                            ]}
                        />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}