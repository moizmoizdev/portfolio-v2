import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:900px)');
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];
  
  return (
    <AppBar position="fixed" elevation={0} className="header">
      <Container>
        <Toolbar disableGutters className="toolbar">
          <Typography component="h1" variant="h6" className="logo">
            <Link to="/">Portfolio</Link>
          </Typography>
          
          {isMobile ? (
            <>
              <IconButton
                onClick={(e) => setMobileMenuAnchor(e.currentTarget)}
                className="menu-button"
              >
                <MenuIcon />
              </IconButton>
              
              <Menu
                anchorEl={mobileMenuAnchor}
                open={Boolean(mobileMenuAnchor)}
                onClose={() => setMobileMenuAnchor(null)}
                className="mobile-menu"
              >
                {menuItems.map(item => (
                  <MenuItem 
                    key={item.path}
                    component={Link}
                    to={item.path}
                    onClick={() => setMobileMenuAnchor(null)}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box className="nav-container">
              {menuItems.map(item => (
                <Link key={item.path} to={item.path} className="nav-link">
                  {item.name}
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 