const router = require(`express`).Router(); //Creates a variable to import router engine from express.

router.get('/hello-world', (req, res) => {
    /*
    -The pathway is noted as a string "/hello-world"
    -A callback function to handle the request and response.
        -req, res
    */

    res.send('Hello World');
})
/*
!   Challenge
    -Request Type: POST
    -Endpoint: "greeting"
    -Send: "Good Afternoon!" as a string
    -Test: Postman
        *hint: GET should be POST

    Solution Method:
        router.post('/greeting', (req,res)=>{
            res.send('Good Afternoon!)
            res.status(200).send('Good Afternoon!') //*Alternate solution
        })
*/


module.exports = router;
//! Don't forget to export the defined route.