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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Frozen yoghurt",
    "kjasdfjlkdsajfkadslfkjlkjflkdls;kfjadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsd",
    6.0,
    24,
    4.0
  ),
  createData(
    "Ice cream sandwich",
    "kjasdfjlkdsajfkadslfkjlkjflkdls;kfjadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsd",
    9.0,
    37,
    4.3
  ),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function EmployeesList() {
  const classes = useStyles();
  const [employees, setEmployees] = useState([]);

  useEffect(async () => {
    const response = await fetch("http://localhost:5000/");
    const jsonData = await response.json();
    setEmployees(jsonData);
  }, []);

  console.log(employees);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Performance Review</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employees) => (
            <TableRow key={employees.id}>
              <TableCell component="th" scope="employees">
                {employees.name}
              </TableCell>
              <TableCell>{employees.review}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ background: "green" }}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button variant="contained" color="secondary">
                  Remove
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button variant="contained" color="primary">
                  Assign
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
