import { Box, Typography } from "@mui/material";

type props = {
  skillName: string;
  imgPath: string;
};

export default function SkillsCard({ skillName, imgPath }: props) {
  const basePath = "/images/skillIcons/";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.625rem",
      }}
    >
      <Box
        component="img"
        src={basePath + imgPath}
        alt={skillName}
        sx={{
          width: "7rem",
          height: "7rem",
        }}
      />
      <Typography variant="body1" align="center">
        {skillName}
      </Typography>
    </Box>
  );
}
