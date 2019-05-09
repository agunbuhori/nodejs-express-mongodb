const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;

const userService = require("./services/userService");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.all('/user', (req, res) => {
    userService.restApi(req, response => res.send(response));
});

app.use(router);
app.listen(PORT, () => console.log("Server running on port "+PORT));