import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Person2Icon from '@mui/icons-material/Person2';
import InfoIcon from '@mui/icons-material/Info';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import NearMeIcon from '@mui/icons-material/NearMe';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useLocation, useNavigate } from 'react-router';
import { Dashboard, FireTruckRounded, GifBoxRounded, Logout, Route, StoreMallDirectory } from '@mui/icons-material';

const drawerWidth = 240;

const clientMenuOptions = [
  {
    path:'/WorkSpace/Dashboard',
    icon:<Dashboard />,
    label: 'Dashboard'
  },
  {
    path:'./MyLoads',
    icon:<NearMeIcon />,
    label: 'My Loads'
  },
  {
    path:'/WorkSpace/Marketplace',
    icon:<StoreMallDirectory />,
    label: 'Marketplace'
  },
]

const commonMenuOptions = [
  {
    path:'/WorkSpace/MyRoutes',
    icon:<Route />,
    label: 'My Routes'
  },
  {
    path:'/WorkSpace/AboutCompany',
    icon:<InfoIcon />,
    label: 'About Company'
  },
  {
    path:'/WorkSpace/Profile',
    icon:<Person2Icon />,
    label: 'Profile'
  },
  {
    path:'/Logout',
    icon:<Logout />,
    label: 'Logout'
  },
]


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            SOC TRANSPORT  &nbsp; <LocalShippingIcon />
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {clientMenuOptions.map((item, index) => (
            <ListItem key={index} disablePadding onClick={()=>navigate(item.path)}>
              <ListItemButton>
                <ListItemIcon>

                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {commonMenuOptions.map((item, index) => (
            <ListItem key={index} disablePadding onClick={()=>navigate(item.path)}>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <Main open={open}>
        <DrawerHeader />
        {location.pathname !== '/WorkSpace/'?props.children:(<><Typography variant='h4'>
          👋 Hey, I am Ayush and Isha presenting our project on transport management system.
        </Typography>
        <Typography paragraph>
          This is a dashboard page.
        </Typography></>)}
      </Main>
    </Box>
  );
}