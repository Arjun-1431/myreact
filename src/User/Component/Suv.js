// export default function hatchback(){
//     return(
//         <div>

//         </div>
//     )
// }


import Button from '@mui/material/Button';
import "./CssFiles/hatchback.css"
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
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
import Sidebar from '../UserPanel/sidebar';
import CarCart from '../UserPanel/carCart';
import {useNavigate} from 'react-router-dom'


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

export default function Suv() {

  const navigate = useNavigate()

  const handlebooking =()=>{
    navigate('/LiveCondition')
  }
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} style={{ background: 'white' }}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
              
            }}
          >
            <IconButton
              edge="start"
              color="secondary"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
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
              Get All Cars
            </Typography>
            <IconButton color="primary">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              width: '0%'
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" sx={{ flexGrow: 1 }}>
            <Sidebar />
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
                <Paper
                  sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'row',
                    height: 'auto',
                  margin:'10px'
                  }}
                >
                   
                 <div className="wrapper">
      <div className="card1">
        <div className="card-banner">
          <p className="category-tag popular">Baleno</p>
          <img className="banner-img" src={require('./Assets/baleno.jpg')} alt='' />
        </div>
        <div className="card-body">
          <p className="blog-hashtag">#Safe #Drive</p>
          <h2 className="blog-title">What is the tastiest pizza in Pizza Hut?</h2>
          
          <Button  variant="contained" onClick ={handlebooking}>Book Now</Button>
          <div className="card-profile">
            <img className="profile-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYJQKSoM7S75P_KMRtQHqAAIPh133CSxByw&usqp=CAU' alt='' />
            <div className="card-profile-info">
              <h3 className="profile-name">Eleanor Pea</h3>
              <p className="profile-followers">5 year of experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card1">
        <div className="card-banner">
          <p className="category-tag technology">Grand i10</p>
          <img className="banner-img" src={require('./Assets/Grandi10.jpg')} alt='' />
        </div>
        <div className="card-body">
        <p className="blog-hashtag">#Safe #Drive</p>
          <h2 className="blog-title">Which city is famous for biryani in India?</h2>
          <Button  variant="contained" onClick ={handlebooking}>Book Now</Button>
          <div className="card-profile">
            <img className="profile-img" src='https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg' alt='' />
            <div className="card-profile-info">
              <h3 className="profile-name">Darrell Steward</h3>
              <p className="profile-followers">5 year of experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card1">
        <div className="card-banner">
          <p className="category-tag psychology">Kwid</p>
          <img className="banner-img" src={require('./Assets/Kwid.jpg')} alt='' />
        </div>
        <div className="card-body">
        <p className="blog-hashtag">#Safe #Drive</p>
          <h2 className="blog-title">What is the most popular burger?</h2>
          <Button  variant="contained" onClick ={handlebooking}>Book Now</Button>
          <div className="card-profile">
            <img className="profile-img" src='https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg' alt='' />
            <div className="card-profile-info">
              <h3 className="profile-name">Savannah Nguyen</h3>
              <p className="profile-followers">5 year of experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card1">
        <div className="card-banner">
          <p className="category-tag psychology">Maruti suzuki Swift</p>
          <img className="banner-img" src={require('./Assets/suzuki swift.jpg')} alt='' />
        </div>
        <div className="card-body">
        <p className="blog-hashtag">#Safe #Drive</p>
          <h2 className="blog-title">What is the most popular burger?</h2>
          <Button  variant="contained" onClick ={handlebooking}>Book Now</Button>
          <div className="card-profile">
            <img className="profile-img" src='https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg' alt='' />
            <div className="card-profile-info">
              <h3 className="profile-name">Savannah Nguyen</h3>
              <p className="profile-followers">5 year of experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card1">
        <div className="card-banner">
          <p className="category-tag psychology">Altroz</p>
          <img className="banner-img" src={require('./Assets/tata altroz.jpg')} alt='' />
        </div>
        <div className="card-body">
        <p className="blog-hashtag">#Safe #Drive</p>
          <h2 className="blog-title">What is the most popular burger?</h2>
          <Button  variant="contained" onClick ={handlebooking}>Book Now</Button>
          <div className="card-profile">
            <img className="profile-img" src='https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg' alt='' />
            <div className="card-profile-info">
              <h3 className="profile-name">Savannah Nguyen</h3>
              <p className="profile-followers">5 year of experience</p>
            </div>
          </div>
        </div>
      </div>

    </div>       
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