const express = require("express");
const app = express();
const port = 5000;
const knex = require("knex");
const cors = require("cors");
const { json } = require("express");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Admin view
//View all employees
app.get("/", (req, res) => {
  db("employees")
    .select("*")
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json("unable to read the list"));
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
    })
    .catch((err) => res.status(400).json("unable to add"));
});

//remove employee
app.delete("/employee/:id", (req, res) => {
  const id = req.params.id;
  db("employees")
    .del()
    .where("id", id)
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json("can't delete"));
});

//update employee
app.put("/employee/:id", (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  db("employees")
    .where("id", id)
    .update("name", name)
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json("can't update"));
});

//view performance review
app.get("/employee/:id", (req, res) => {
  const id = req.params.id;
  db("employees")
    .select("*")
    .where("id", id)
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json("can't get review"));
});

//add performance review
app.put("/employee/:id", (req, res) => {});
//update performance review
app.put("/employee/:id", (req, res) => {});
//assign employees to participate in another employee's performance review
app.put("/employee/:id", (req, res) => {});

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
