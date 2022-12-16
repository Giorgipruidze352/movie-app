import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import UserContext from "../contexts/User";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    loginUser(user);
    navigate("/home");
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
      <Box
        component="form"
        sx={{ width: "100%" }}
        onSubmit={handleLogin}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 800, textAlign: "center", margin: "2rem auto" }}
        >
          Log In
        </Typography>
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
          Log In
        </Button>
        <Typography sx={{ textAlign: "center", color: "#909090" }}>
          or
        </Typography>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mt: 1, mb: 1, padding: "12px" }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
