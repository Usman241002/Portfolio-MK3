import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { ArrowBack, GitHub } from "@mui/icons-material";
import projects from "../data/projects";
import { useNavigate, useParams } from "react-router-dom";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  githubLink: string;
};

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { title } = useParams();
  const project: Project | undefined = projects.find((p) => p.title === title);
  const base = "/images/projectImages/";

  if (project == undefined) {
    return (
      <Box sx={{ py: 4, px: 4, backgroundColor: "#F4F4F9" }}>
        <Container>
          <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
            Project Not Found
          </Typography>
          <Typography variant="body1" color="text.primary">
            The project does not exist.
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4, px: 4, backgroundColor: "#F4F4F9" }}>
      <Container>
        <Stack direction="column" spacing={4}>
          <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
            {project.title}
          </Typography>

          <Grid
            container
            spacing={4}
            direction={{
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
            }}
          >
            <Grid size={{ xs: 12, sm: 12, md: 7 }} spacing={2}>
              <Typography variant="body1" color="text.primary">
                {project.description}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 5 }}>
              <Box
                component="img"
                src={base + project.image}
                alt={project.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  border: "1px solid #000000",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
              />
            </Grid>
          </Grid>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ArrowBack />}
              disableRipple
              disableElevation
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href={project.githubLink}
              startIcon={<GitHub />}
              disableRipple
              disableElevation
            >
              Github
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
