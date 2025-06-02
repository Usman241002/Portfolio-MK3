import { Grid, Stack, Typography } from "@mui/material";
import SkillsCard from "../components/SkillsCard";

export default function Skills() {
  const skills = [
    {
      id: 1,
      skillName: "HTML5",
      imgPath: "html.svg",
    },
    {
      id: 2,
      skillName: "CSS",
      imgPath: "css.svg",
    },
    {
      id: 3,
      skillName: "JavaScript",
      imgPath: "JavaScript.svg",
    },
    {
      id: 4,
      skillName: "PHP",
      imgPath: "Php.svg",
    },
    {
      id: 5,
      skillName: "C",
      imgPath: "C.svg",
    },
    {
      id: 6,
      skillName: "C++",
      imgPath: "C++.svg",
    },
    {
      id: 7,
      skillName: "Python",
      imgPath: "Python.svg",
    },
    {
      id: 8,
      skillName: "React",
      imgPath: "React.svg",
    },
    {
      id: 9,
      skillName: "NodeJS",
      imgPath: "NodeJs.svg",
    },
    {
      id: 10,
      skillName: "PostgreSQL",
      imgPath: "Postgre.svg",
    },
  ];
  return (
    <Stack spacing={4} px={{ xs: 0, sm: 4 }}>
      <Typography
        variant="h4"
        color="primary"
        sx={{ fontWeight: "bold" }}
        gutterBottom
      >
        Skills
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "flex-start" }}>
        {skills.map((skill) => (
          <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3 }} key={skill.id}>
            <SkillsCard
              key={skill.id}
              skillName={skill.skillName}
              imgPath={skill.imgPath}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
