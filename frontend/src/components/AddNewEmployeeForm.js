import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { sizing } from "@material-ui/system";

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function AddNewEmployeeForm() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const addNewName = async (e) => {
    // e.preventDefault();
    try {
      const body = { name, review };
      const response = await fetch("http://localhost:5000/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Box m={5}>
        <h1 m={5}>Add new employee</h1>
        <Box display="flex" height={100}>
          <Box display="flex" flexDirection="row">
            <Box>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box ml={4}>
              {/* <TextField
                id="outlined-basic"
                label="Performance Review"
                variant="outlined"
                onChange={(e) => setReview(e.target.value)}
              /> */}
              <TextField
                id="outlined-multiline-static"
                label="Performance Review"
                multiline
                rows={8}
                variant="outlined"
                style={{ width: "700px" }}
                onChange={(e) => setReview(e.target.value)}
              />
            </Box>
            <Box ml={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => addNewName(name, review)}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AddNewEmployeeForm;
