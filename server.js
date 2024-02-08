require("dotenv").config();

require('./config/db.connection')

const { PORT } = process.env;

const express = require("express");

const app = express();

const cors = require("cors")
const morgan = require("morgan")

const arrivedRouter = require('./routes/arrived');
const goalRouter = require('./routes/goal')
const journalRouter = require('./routes/journal')

app.use(express.urlencoded({extended:true}))
app.use(express.json()); 

app.use(cors());
app.use(morgan("dev"));

app.use('/goal', goalRouter)
app.use('/arrived', arrivedRouter)
app.use('/journal', journalRouter)

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));