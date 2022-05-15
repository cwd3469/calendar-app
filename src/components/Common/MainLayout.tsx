import * as React from 'react';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  CssBaseline,
  Toolbar,
  List,
  Box,
  Typography,
  Divider,
  IconButton,
  Badge,
  Container,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Notifications as NotificationsIcon,
  Logout,
} from '@mui/icons-material';
import LayoutItems from './LayoutItems';

// open type
interface AppBarProps extends MuiAppBarProps {
  readonly open?: boolean;
}

type PropsData = {
  children: JSX.Element;
};

// 사이드바 길이
const drawerWidth = 240;

const mdTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
    secondary: {
      main: '#fff',
      contrastText: '000',
    },
    error: {
      main: '#ef5350',
      contrastText: 'white',
    },
  },
});

//mui 커스텀 컴퍼넌트  => 레이아웃 헤더
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

//mui 커스텀 컴퍼넌트  => 사이드 탭
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
  })
);

//레이아웃
function MainLayout(props: PropsData) {
  const { children } = props;

  //사이드바 온오프 기능
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', minWidth: '860px' }}>
        <CssBaseline />
        {/* 레이아웃 헤더 */}
        <AppBar position="absolute" open={open} color="secondary">
          <Toolbar
            sx={{
              pr: '24px',
              minHeight: '48px',
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
            <Typography
              component="h6"
              variant="body2"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, textAlign: 'center' }}
            >
              나만의 다이어리
            </Typography>
            <IconButton color="inherit">
              <Logout fontSize="small" />
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* 사이드 텝  */}
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          ></Toolbar>
          <Divider />
          <List
            component="nav"
            sx={{
              padding: '0px',
            }}
          >
            <LayoutItems />
          </List>
        </Drawer>

        {/* 페이지 컨텐츠 */}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            {children}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MainLayout;
