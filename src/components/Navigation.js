import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import UserContext from "../contexts/User";

const Navigation = () => {
  const pages = ["home", "favorites"];
  const navigate = useNavigate();
  const { currentUser, logoutUser } = useContext(UserContext);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        background: "black",
        color: "white",
      }}
    >
      <List sx={{ listStyleType: "none", display: "flex" }}>
        {pages.map((page) => (
          <ListItem disablePadding sx={{ maxWidth: "100px" }} key={page}>
            <ListItemButton onClick={() => navigate(`/${page}`)}>
              <ListItemText
                primary={page}
                sx={{ textAlign: "center", textTransform: "capitalize" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {!currentUser ? (
        <Button
          sx={{
            width: "100px",
            padding: "8px 12px",
            textAlign: "center",
            color: "white",
            textTransform: "capitalize",
            fontSize: "16px",
          }}
          onClick={() => navigate("/login")}
        >
          Log In
        </Button>
      ) : (
        <Button
          sx={{
            width: "100px",
            padding: "8px 12px",
            textAlign: "center",
            color: "white",
            textTransform: "capitalize",
            fontSize: "16px",
          }}
          onClick={logoutUser}
        >
          Log Out
        </Button>
      )}
    </Box>
  );
};

export default Navigation;
