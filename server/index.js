require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();
const controller = require("./controller");
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const PORT = SERVER_PORT;
const path = "/api/properties"

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set("db", db)
    app.get(path, controller.getHouse)
    app.post(path, controller.createHouse)
    app.put(`${path}/:id`, controller.updateOne)
    app.delete(`${path}/:id`, controller.delete)
    console.log(`Check out my MASSIVE connection`)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
