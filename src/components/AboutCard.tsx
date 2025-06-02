import { Card, CardHeader, CardContent } from "@mui/material";

type props = {
  title: string;
  subtitle: string;
  description: string;
};

export default function AboutCard({ title, subtitle, description }: props) {
  return (
    <Card>
      <CardHeader
        title={title}
        subheader={subtitle}
        titleTypographyProps={{ fontWeight: "bold" }}
        subheaderTypographyProps={{ fontStyle: "italic" }}
      />
      <CardContent sx={{ pt: 0 }}>{description}</CardContent>
    </Card>
  );
}
