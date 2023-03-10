import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import lightTheme from '../public/theme/Lighttheme';
import '../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { styled, useTheme, alpha } from '@mui/material/styles';
import createEmotionCache from '../components/createEmotionCache';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NightlightIcon from '@mui/icons-material/Nightlight';
import MoreIcon from '@mui/icons-material/MoreVert';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../public/images/HORIZON FREE.png";
import profile from "../public/images/profile.png";
import sidebarfooter from "../public/images/sidebar-footer.png";
import BottomFooter from '../components/BottomFooter';



const clientSideEmotionCache = createEmotionCache();

const drawerWidth = 210;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  marginTop: '50%',
  ...theme.mixins.toolbar,
}));


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
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  background: '#eaeef7',
  height: '40px',
  margin: 1,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(2),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));




const MyApp = (props, session) => {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const activeRoute = router.pathname;
  const title = activeRoute === '/' ? 'Dashboard' : `${activeRoute}`;
  const currentRoute = activeRoute.split('/').pop();

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleSignOut = () => {
    localStorage.clear();
    router.push('/signin');

  }

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} style={{ color: '#2B3674' }}>
        <Link href="/Profile">
          <IconButton>
            <Image
              src={profile}
              alt={"Thumbnail-alt"}
              width={30}
              height={30}
              style={{ marginRight: "12px", borderRadius: "50%" }}
            />
          </IconButton>
        </Link>
        Profile
      </MenuItem>
      <MenuItem onClick={handleSignOut} style={{ color: '#2B3674' }}>
        <IconButton color="#AEA3D0">
          <LogoutIcon style={{ fill: '#AEA3D0' }} />
        </IconButton>
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Search>
          <SearchIconWrapper>
            <SearchIcon style={{ fill: '#2B3674' }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            style={{ color: '#2B3674' }}
          />
        </Search>
      </MenuItem>
      <MenuItem>
        <IconButton color="#AEA3D0">
          <NotificationsNoneIcon style={{ fill: '#AEA3D0' }} />
        </IconButton>
        <p style={{ color: '#2B3674' }}>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="#AEA3D0">
          <NightlightIcon style={{ fill: '#AEA3D0' }} />
        </IconButton>
        <p style={{ color: '#2B3674' }}>Theme</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="#AEA3D0">
          <InfoOutlinedIcon style={{ fill: '#AEA3D0' }} />
        </IconButton>
        <p style={{ color: '#2B3674' }}>Info</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-haspopup="true"
          color="inherit"
        >
          <Image
            src={profile}
            alt={"Thumbnail-alt"}
            width={30}
            height={30}
            style={{ marginRight: "15px", borderRadius: "50%" }}
          />
        </IconButton>
        <p style={{ color: '#2B3674' }}>Profile</p>
      </MenuItem>
    </Menu>
  );


  return (
    <>
      <Head>
        <title>Horizon Free</title>
        <meta name="description" content="Learning purpose nextjs project" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/images/HORIZON FREE.png" />
      </Head>

      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} elevation={0} >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 5,
                    ...(open && { display: 'none' }),
                  }}
                >
                  <MenuIcon style={{ fill: '#2B3674' }} />
                </IconButton>
                <Typography variant="h6" color="#2B3674" fontWeight="Bold" noWrap component="div">
                  {title === 'Dashboard' ? title : currentRoute}
                </Typography>

                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{
                  display: { xs: 'none', md: 'flex' },
                  background: '#fff',
                  borderRadius: '25px',
                  marginTop: '5px',
                  alignItems: 'center',

                }}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon style={{ fill: '#2B3674' }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search"
                      inputProps={{ 'aria-label': 'search' }}
                      style={{ color: '#2B3674' }}
                    />
                  </Search>
                  <IconButton size="large" color="#AEA3D0">
                    <NotificationsNoneIcon style={{ fill: '#AEA3D0' }} />
                  </IconButton>

                  <IconButton size="large" color="#AEA3D0">
                    <NightlightIcon style={{ fill: '#AEA3D0' }} />
                  </IconButton>

                  <IconButton size="large" color="#AEA3D0">
                    <InfoOutlinedIcon style={{ fill: '#AEA3D0' }} />
                  </IconButton>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit">
                    <Image
                      src={profile}
                      alt={"Thumbnail-alt"}
                      width={30}
                      height={30}
                      style={{ marginRight: "15px", borderRadius: "50%" }}
                    />
                  </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                  {renderMobileMenu}
                  {renderMenu}
                </Box>
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
              <DrawerHeader>
                <Image
                  src={logo}
                  alt={"Thumbnail-alt"}
                  width={140}
                  height={20}
                  style={{ marginRight: "12px" }}
                />
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <CloseIcon style={{ fill: '#2B3674' }}/>}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <ListItem disablePadding sx={{ display: 'block' }}>
                <Link href="/" className={title === 'Dashboard' ? styles.active : styles.nonActive}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: '#A3AED0'
                      }}
                    >
                      <HomeIcon className={title === 'Dashboard' ? styles.active : styles.nonActive} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }}>
                    </ListItemText>
                  </ListItemButton>
                </Link>

              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }}>
                <Link href="/NFT_Marketplace" className={title === '/NFT_Marketplace' ? styles.active : styles.nonActive}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}

                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: '#A3AED0'
                      }}
                    >
                      <ShoppingCartOutlinedIcon className={title === '/NFT_Marketplace' ? styles.active : styles.nonActive} />
                    </ListItemIcon>
                    <ListItemText primary="NFT Marketplace" sx={{ opacity: open ? 1 : 0 }}>
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }}>
                <Link href="/Tables" className={title === '/Tables' ? styles.active : styles.nonActive}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}

                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: '#A3AED0'
                      }}
                    >
                      <BarChartRoundedIcon className={title === '/Tables' ? styles.active : styles.nonActive} />
                    </ListItemIcon>
                    <ListItemText primary="Tables" sx={{ opacity: open ? 1 : 0 }}>
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }}>
                <Link href="/Kanban" className={title === '/Kanban' ? styles.active : styles.nonActive}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}

                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: '#A3AED0'
                      }}
                    >
                      <DashboardRoundedIcon className={title === '/Kanban' ? styles.active : styles.nonActive} />
                    </ListItemIcon>
                    <ListItemText primary="Kanban" sx={{ opacity: open ? 1 : 0 }}>
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }}>
                <Link href="/Profile" className={title === '/Profile' ? styles.active : styles.nonActive}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}

                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: '#A3AED0'
                      }}
                    >
                      <PersonRoundedIcon className={title === '/Profile' ? styles.active : styles.nonActive} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" sx={{ opacity: open ? 1 : 0 }}>
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }}>
                <Link href="/signin" className={title === '/signin' ? styles.active : styles.nonActive}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: '#A3AED0'
                      }}
                    >
                      <HttpsRoundedIcon className={title === '/signin' ? styles.active : styles.nonActive} />
                    </ListItemIcon>
                    <ListItemText primary="Sign In" sx={{ opacity: open ? 1 : 0 }}>
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
             {!open ?<></>:
                <DrawerFooter >
                  <Image src={sidebarfooter} alt="sidebar-footer" style={{ width: 'auto', height: 'auto' }} />
                </DrawerFooter>}

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
                <Component {...pageProps} />
              <BottomFooter />
            </Box>
          </Box>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default MyApp;