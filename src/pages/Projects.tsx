import { Box, Container, Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  const projectsReversed = projects.slice().reverse();

  return (
    <Box sx={{ py: 6, px: { xs: 2, sm: 4 }, backgroundColor: "#F4F4F9" }}>
      <Container>
        <Grid container spacing={4}>
          {projectsReversed.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              subtitle={project.subtitle}
              imageurl={project.image}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
