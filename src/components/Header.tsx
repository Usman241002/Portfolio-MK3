import { Typography } from "@mui/material";

type props = {
  title: string;
  description: string;
};

export default function Header({ title, description }: props) {
  return (
    <>
      <Typography variant="h2" color="#FFFFFF" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="h5" color="#FFFFFF">
        {description}
      </Typography>
    </>
  );
}
