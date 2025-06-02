import { Stack, Typography } from "@mui/material";
import AboutCard from "../components/AboutCard";

export default function Experience() {
  return (
    <Stack spacing={4} px={{ xs: 0, sm: 4 }}>
      <Typography
        variant="h4"
        color="primary"
        sx={{ fontWeight: "bold" }}
        gutterBottom
      >
        Experience
      </Typography>

      <AboutCard
        title="Freelance Software Developer"
        subtitle="2024 – Present"
        description="Built and optimized web apps for small businesses. Developed database-driven tools to enhance operations."
      />
      <AboutCard
        title="Automotive Business Operations"
        subtitle="2022 – Present"
        description="Oversaw car sales, third-party dealership operations, and team coordination. Streamlined business processes using technical problem-solving."
      />
    </Stack>
  );
}
