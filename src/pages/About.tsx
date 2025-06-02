import { Box, Button, Container, Grid, Paper, Stack } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export default function About() {
  const aboutNavItems: string[] = [
    "Overview",
    "Experience",
    "Education",
    "Skills",
  ];
  return (
    <Box sx={{ py: 4, px: 4, backgroundColor: "#F4F4F9" }}>
      <Container>
        <Grid container spacing={3} direction={{ xs: "column", sm: "row" }}>
          <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2 }}>
            <Paper sx={{ p: { xs: 2, sm: 2, md: 3 } }}>
              <Stack direction="column" spacing={1}>
                {aboutNavItems.map((item) => (
                  <NavLink
                    end={item === "Overview"}
                    to={
                      item === "Overview"
                        ? "/about"
                        : `/about/${item.toLowerCase()}`
                    }
                    key={item}
                    style={{
                      display: "inline-flex",
                      width: "fit-content",
                      textDecoration: "none",
                    }}
                  >
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? "contained" : "text"}
                        sx={{ borderRadius: 3 }}
                        disableRipple
                      >
                        {item}
                      </Button>
                    )}
                  </NavLink>
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, sm: 8, md: 9, lg: 10 }}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
