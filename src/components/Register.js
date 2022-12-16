import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import UserContext from "../contexts/User";

const Register = () => {
  const navigate = useNavigate();
  const { signupUser } = useContext(UserContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = {
      fullname: formData.get("fullname"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    signupUser(newUser);
    navigate("/login");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 3,
      }}
    >
      <Box component="form" sx={{ width: "100%" }} onSubmit={handleRegister}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 800, textAlign: "center", margin: "2rem auto" }}
        >
          Sign Up
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Fullname"
          name="fullname"
          id="fullname"
          sx={{ mt: 1, mb: 1 }}
          autoComplete="false"
          required
        />
        <TextField
          fullWidth
          type="email"
          label="Email"
          name="email"
          id="email"
          sx={{ mt: 1, mb: 1 }}
          autoComplete="false"
          required
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          id="password"
          sx={{ mt: 1, mb: 1 }}
          autoComplete="false"
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 1, padding: "12px" }}
        >
          Sign Up
        </Button>
        <Typography sx={{ textAlign: "center", color: "#909090" }}>
          or
        </Typography>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mt: 1, mb: 1, padding: "12px" }}
          onClick={() => navigate("/login")}
        >
          Log In
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
