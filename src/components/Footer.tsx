import { Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Container sx={{ py: 1 }}>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Usman Khalid. All rights reserved. |
        Designed and developed by Usman Khalid
      </Typography>
    </Container>
  );
}
