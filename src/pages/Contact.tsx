import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useState } from "react";
import ContactCard from "../components/ContactCard";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <Box sx={{ py: 4, px: { xs: 2, sm: 4 }, backgroundColor: "#F4F4F9" }}>
      <Container>
        <Grid
          container
          direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
          spacing={4}
        >
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <Typography
                variant="h4"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                Send A Message
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Subject"
                variant="outlined"
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                fullWidth
                disableRipple
                disableElevation
              >
                Send Message
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography
                variant="h4"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                Contact Information
              </Typography>
              <Paper>
                <Stack spacing={2} p={2}>
                  <ContactCard title="Email" info="ukhalid428@gmail.com" />
                  <ContactCard
                    title="Location"
                    info="Birmingham, United Kingdom"
                  />
                  <Box>
                    <IconButton
                      component={Link}
                      href="https://www.linkedin.com/in/usman-khalid-dev/"
                      color="primary"
                      sx={{
                        paddingLeft: 0,
                        transition: "transform 0.1s ease-in",
                        "&:hover": { transform: "scale(1.2)" },
                      }}
                      disableRipple
                    >
                      <LinkedIn fontSize="large" />
                    </IconButton>

                    <IconButton
                      component={Link}
                      href="https://github.com/Usman241002/"
                      color="primary"
                      sx={{
                        transition: "transform 0.1s ease-in",
                        "&:hover": { transform: "scale(1.1)" },
                      }}
                      disableRipple
                    >
                      <GitHub fontSize="large" />
                    </IconButton>
                  </Box>
                </Stack>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
