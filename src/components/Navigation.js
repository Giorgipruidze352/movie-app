import * as React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const Navigation = () => {
  const pages = ["Home", "Favorites"];
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
            <ListItemButton>
              <ListItemText primary={page} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        sx={{
          width: "100px",
          padding: "8px 12px",
          textAlign: "center",
          color: "white",
          textTransform: "capitalize",
          fontSize: "16px"
        }}
      >
        Log In
      </Button>
    </Box>
  );
};

export default Navigation;
