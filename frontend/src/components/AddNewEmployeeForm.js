import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";

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

  const addNewName = async (e) => {
    // e.preventDefault();
    try {
      const body = { name };
      const response = await fetch("http://localhost:5000/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      // console.err(err);
    }
  };

  return (
    <form>
      {/* <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <Box display="flex" height={400}>
        <Box m="auto" display="flex" flexDirection="row">
          <Box>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box m={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => addNewName(name)}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default AddNewEmployeeForm;
