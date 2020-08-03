const express = require("express");
const app = express();
const port = 3000;
const knex = require("knex");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Admin view
//View all employees
app.get("/", (req, res) => {
  res.send("Hello");
});

//Add employee
app.post("/employee", (req, res) => {
  const { name } = req.body;
  db("employees")
    .returning("*")
    .insert({
      name: name,
    })
    .then((response) => {
      res.json(response);
    });
});

//remove employee
app.delete("/employee/:id", (req, res) => {});

//update employee
app.put("/employee/:id", (req, res) => {});

//view performance review
app.get("/employee/:id", (req, res) => {});

//add performance review
app.patch("/employee/:id", (req, res) => {});
//update performance review
app.put("/employee/:id", (req, res) => {});
//assign employees to participate in another employee's performance review
app.patch("/employee/:id", (req, res) => {});

//Employee view
//view list of performance reviews requiring feedback

//submit feedback

app.listen(port, () => {
  console.log(`The app listening at http://localhost:${port}`);
});

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "Shuntaro_Maekawa",
    password: "",
    database: "employee",
  },
});

// db("employees").insert({ name: "Shun" });

db.select("*")
  .from("employees")
  .then((res) => console.log(res));
