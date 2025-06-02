import { Stack, Typography } from "@mui/material";
import AboutCard from "../components/AboutCard";

export default function Education() {
  return (
    <Stack spacing={4} px={{ xs: 0, sm: 4 }}>
      <Typography
        variant="h4"
        color="primary"
        sx={{ fontWeight: "bold" }}
        gutterBottom
      >
        Education
      </Typography>

      <AboutCard
        title="BSc (Hons) Software Engineering"
        subtitle="Coventry University (2023 – Present)"
        description="Relevant coursework: Data Structures & Algorithms, Web Development, Software Design Patterns"
      />
      <AboutCard
        title="A-Levels"
        subtitle="Washwood Heath Sixth Form (2019 – 2021)"
        description="Mathematics (A*) | Physics (A) | Biology (A)"
      />
    </Stack>
  );
}
