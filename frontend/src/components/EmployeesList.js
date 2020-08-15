import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function EmployeesList() {
  const classes = useStyles();
  const [employees, setEmployees] = useState([]);

  useEffect(async () => {
    const response = await fetch("http://localhost:5000/");
    const jsonData = await response.json();
    setEmployees(jsonData);
  }, []);

  //delete employee from the list
  const deleteEmployee = async (id) => {
    try {
      const deleted = await fetch(`http://localhost:5000/employee/${id}`, {
        method: "DELETE",
      });
      setEmployees(employees.filter((e) => e.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Performance Review</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employees) => (
            <TableRow key={employees.id}>
              <TableCell component="th" scope="employees">
                {employees.name}
              </TableCell>
              <TableCell style={{ maxWidth: 800, overflow: "scroll" }}>
                {employees.review}
              </TableCell>
              <TableCell align="right">
                <Box display="flex" justifyContent="flex-end">
                  <Box m={1}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ background: "green" }}
                    >
                      Edit
                    </Button>
                  </Box>
                  <Box m={1}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={(e) => deleteEmployee(employees.id)}
                      m={2}
                    >
                      Delete
                    </Button>
                  </Box>
                  <Box m={1}>
                    <Button variant="contained" color="primary" m={2}>
                      Assign
                    </Button>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
