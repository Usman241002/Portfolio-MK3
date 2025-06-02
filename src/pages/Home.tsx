import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard.tsx";
import { NavLink } from "react-router-dom";

export default function Home() {
  const projectsReversed = projects.slice().reverse();

  return (
    <>
      <Box
        sx={{ py: 4, px: { xs: 2, sm: 4 }, backgroundColor: "primary.main" }}
      >
        <Container>
          <Stack
            justifyContent="space-between"
            direction={{
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
            }}
            sx={{ alignItems: "center" }}
          >
            <Card
              sx={{
                color: "#FFFFFF",
                bgcolor: "primary.main",
                border: "none",
                boxShadow: "none",
              }}
              square
            >
              <CardContent
                sx={{ textAlign: { xs: "center", sm: "center", md: "left" } }}
              >
                <Typography variant="h3">Hi, I'm...</Typography>
                <Typography variant="h1" sx={{ fontWeight: "bold" }}>
                  Usman Khalid
                </Typography>
                <Typography variant="h5">
                  Born to create solutions to complex challenges, driven by a
                  love for mathematics.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: { xs: "center", sm: "center", md: "left" },
                }}
              >
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  component={NavLink}
                  to="/projects"
                  sx={{ color: (theme) => theme.palette.primary.main }}
                  disableRipple
                  disableElevation
                >
                  View Projects
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  color="secondary"
                  component={NavLink}
                  to="/about"
                  disableRipple
                  disableElevation
                >
                  About Me
                </Button>
              </CardActions>
            </Card>
            <Box
              component="img"
              src="images\profilePicture\Subject.png"
              alt="Hero Image"
              sx={{
                mb: 2,
                width: "20rem",
                height: "20rem",
                objectFit: "cover",
                borderRadius: "100%",
                border: "0.625rem solid #FFFFFF",
                backgroundColor: "secondary.main",
              }}
            />
          </Stack>
        </Container>
      </Box>
      <Box sx={{ py: 4, px: { xs: 2, sm: 4 }, backgroundColor: "#F4F4F9" }}>
        <Container>
          <Stack direction="column" spacing={4}>
            <Typography
              variant="h4"
              color="primary.main"
              sx={{ fontWeight: "bold" }}
            >
              Featured Projects
            </Typography>
            <Grid container spacing={4}>
              {projectsReversed.slice(0, 3).map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  subtitle={project.subtitle}
                  imageurl={project.image}
                />
              ))}
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={NavLink}
                to="/projects"
                disableRipple
                disableElevation
                sx={{ width: "15rem" }}
              >
                View All Projects
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
