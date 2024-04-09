const express = require('express'); //Pulls 'express' from node_modules.
const app = express(); // Simplifies the method call.
const PORT = 4000; //Server port declared within localhost. Using all caps to indicate general.
const practiceController = require(`./controllers/practice.controller`);

app.use(express.static(`${__dirname}/public`))
//__dirname comes from Node.

app.use(`/practice`, practiceController)
//Any traffic coming in that has "practice" after localhost:4000

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`); //Provides feedback to tell us it is running.
})