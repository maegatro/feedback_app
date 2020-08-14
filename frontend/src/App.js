import React from "react";
import "./App.css";
import AddNewEmployeeForm from "./components/AddNewEmployeeForm";
import EmployeesList from "./components/EmployeesList";
import { Box } from "@material-ui/core";

function App() {
  return (
    <>
      <Box m={5}>
        <h1>Employees List</h1>
        <EmployeesList />
      </Box>
      <AddNewEmployeeForm />
    </>
  );
}

export default App;
