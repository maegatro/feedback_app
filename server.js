const express = require("express");
const app = express();
const port = 3000;
const knex = require("knex");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/employee", (req, res) => {
  const { name, review } = req.body;
  db("employees")
    .returning("*")
    .insert({
      name: name,
      review: review,
    })
    .then((response) => {
      res.json(response);
    });
});

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
