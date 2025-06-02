import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems: string[] = ["Home", "Projects", "About", "Contact"];
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{ width: "15rem", height: "100%", backgroundColor: "secondary.main" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#e8e8e8" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mx: { xs: 2, sm: 1 },
            py: 1,
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h5" color="primary.main" fontWeight="bold">
              Usman Khalid
            </Typography>
            <Typography
              variant="body1"
              color="#000000"
              sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            >
              Full-Stack Developer | Mathematician
            </Typography>
          </Stack>
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            sx={{ display: { xs: "flex", sm: "none" }, color: "text.primary" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {navItems.map((item) => (
              <Button
                sx={{ color: "text.primary" }}
                key={item}
                size="small"
                variant="text"
                disableRipple
                component={NavLink}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              >
                {item}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
}
