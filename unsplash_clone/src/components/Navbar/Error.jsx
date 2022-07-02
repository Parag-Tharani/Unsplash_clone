import { Box, Button } from "@mui/material";
import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ErrorIcon
          sx={{
            color: "rgb(230, 85, 85)",
            fontSize: "40px",
            paddingTop: 1,
            marginRight: "20px",
          }}
        />
        <Box>
          <h1 style={{ color: "rgb(140, 130, 130)", fontSize: "60px" }}>
            Error 401
          </h1>
          <h3
            style={{
              color: "rgb(140, 130, 130)",
              fontSize: "30px",
              marginTop: "-30px",
              paddingLeft: 10,
            }}
          >
            Access Forbidden
          </h3>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Link to="/" className="onHover">
          <Button variant="contained" color="inherit" sx={{ marginLeft: 5 }}>
            Back To Home
          </Button>
        </Link>
      </Box>
    </>
  );
};
