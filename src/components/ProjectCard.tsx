import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";

type props = {
  id: number;
  title: string;
  subtitle: string;
  imageurl: string;
};

export default function ProjectCard({ title, subtitle, imageurl }: props) {
  const base = "images/projectImages/";

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
        variant="outlined"
        sx={{
          height: "100%",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "translateY(-1rem)" },
        }}
      >
        <CardMedia
          sx={{
            backgroundColor: "secondary.main",
            height: "12rem",
            objectFit: "contain",
          }}
          component="img"
          src={base + imageurl}
          alt={title}
        ></CardMedia>
        <CardContent>
          <Typography variant="h5" color="primary">
            {title}
          </Typography>
          <Typography variant="body1" color="text">
            {subtitle}
          </Typography>
        </CardContent>
        <CardActions sx={{ pt: 0 }}>
          <Button
            size="small"
            variant="contained"
            component={Link}
            to={`/projects/${title}`}
            color="primary"
            disableRipple
            disableElevation
          >
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
