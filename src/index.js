
const express = require('express');
const app = express();
const indexrouter = require('./Main/indexrouter');

app.use(express.json ());
app.use("/student", indexrouter);

app.listen(5000, () => {
    console.log("server started on port 5000");
});


