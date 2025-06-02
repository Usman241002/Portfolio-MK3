import { Box, Typography } from "@mui/material";

type props = {
  title: string;
  info: string;
};

export default function ContactCard({ title, info }: props) {
  return (
    <Box>
      <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="body1">{info}</Typography>
    </Box>
  );
}
